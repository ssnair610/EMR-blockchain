package controllers

import (
	"context"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/ssnair610/EMR-blockchain/uplink/initializers"
	"github.com/ssnair610/EMR-blockchain/uplink/models"
	"github.com/ssnair610/EMR-blockchain/uplink/responses"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/crypto/bcrypt"
	"log"
	"os"
	"time"
)

var (
	userCollection = initializers.GetCollection(initializers.DB, "user", "credentials")
	SecretKey      = os.Getenv("SECRET_KEY")
)

func Regeister(app *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var newUser map[string]string

	defer cancel()

	if err := app.BodyParser(&newUser); err != nil {
		return app.Status(fiber.StatusBadRequest).JSON(responses.UserResponse{Status: fiber.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	password, _ := bcrypt.GenerateFromPassword([]byte(newUser["Password"]), 14)

	User := models.User{
		Name:     newUser["Name"],
		Email:    newUser["Email"],
		Password: password,
	}

	result, err := userCollection.InsertOne(ctx, User)

	if err != nil {
		return app.Status(fiber.StatusInternalServerError).JSON(responses.UserResponse{Status: fiber.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	err = SetUserDetails(newUser["Name"], newUser["Email"], result.InsertedID, app)
	if err != nil {
		log.Fatalln("Error in SetUserDetails , error : ", err)
	}

	return app.Status(fiber.StatusCreated).JSON(responses.UserResponse{Status: fiber.StatusCreated, Message: "success", Data: &fiber.Map{"data": result}})
}

func Login(app *fiber.Ctx) error {

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var data map[string]string

	defer cancel()

	if err := app.BodyParser(&data); err != nil {
		return app.Status(fiber.StatusBadRequest).JSON(responses.UserResponse{Status: fiber.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	var newUser models.User
	filter := bson.D{{"email", data["Email"]}}

	if err := userCollection.FindOne(ctx, filter).Decode(&newUser); err != nil {
		if err == mongo.ErrNoDocuments {
			// This error means your query did not match any documents.
			return app.Status(fiber.StatusBadRequest).JSON(responses.UserResponse{Status: fiber.StatusBadRequest, Message: "Account doesnt exist", Data: &fiber.Map{"data": err.Error()}})
		}
		log.Fatal(err)
	}

	if err := bcrypt.CompareHashAndPassword(newUser.Password, []byte(data["Password"])); err != nil {
		return app.Status(fiber.StatusBadRequest).JSON(responses.UserResponse{Status: fiber.StatusBadRequest, Message: "Could not Login", Data: &fiber.Map{"data": err.Error()}})
	}

	nowTime := time.Now()
	expireTime := nowTime.Add(24 * time.Hour)

	claims := jwt.NewWithClaims(
		jwt.SigningMethodHS256,
		jwt.RegisteredClaims{
			Issuer:    newUser.ID.Hex(),
			ExpiresAt: jwt.NewNumericDate(expireTime),
		},
	)

	token, err := claims.SignedString([]byte(SecretKey))
	if err != nil {
		return app.Status(fiber.StatusInternalServerError).JSON(responses.UserResponse{Status: fiber.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	cookie := fiber.Cookie{
		Name:     "jwt-token",
		Value:    token,
		Expires:  expireTime,
		HTTPOnly: true,
	}

	app.Cookie(&cookie)

	return app.Status(fiber.StatusAccepted).JSON(responses.UserResponse{Status: fiber.StatusAccepted, Message: "Login Successful"})
	//return app.JSON(newUser.ID)
}

func User(app *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var user models.User

	defer cancel()

	cookie := app.Cookies("jwt-token")
	token, err := jwt.ParseWithClaims(cookie, &jwt.RegisteredClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})

	if err != nil {
		return app.Status(fiber.StatusUnauthorized).JSON(responses.UserResponse{Status: fiber.StatusUnauthorized, Message: "User is Unauthenticated"})
	}

	claims := token.Claims.(*jwt.RegisteredClaims)
	objectId, err := primitive.ObjectIDFromHex(claims.Issuer)
	if err != nil {
		return app.Status(fiber.StatusBadRequest).JSON(responses.UserResponse{Status: fiber.StatusBadRequest, Message: "Document not found in Database", Data: &fiber.Map{"data": err.Error()}})
	}
	filter := bson.M{"_id": objectId}

	if err = userCollection.FindOne(ctx, filter).Decode(&user); err != nil {
		if err == mongo.ErrNoDocuments {

			// This error means your query did not match any documents.
			return app.Status(fiber.StatusBadRequest).JSON(responses.UserResponse{Status: fiber.StatusBadRequest, Message: "Account doesnt exist wow	", Data: &fiber.Map{"data": err.Error()}})

		}
		log.Fatal(err)
	}

	return app.JSON(user)
}

func LogOut(app *fiber.Ctx) error {

	nowTime := time.Now()
	expireTime := nowTime.Add(-time.Hour)

	cookie := fiber.Cookie{
		Name:     "jwt-token",
		Expires:  expireTime,
		HTTPOnly: true,
	}

	app.Cookie(&cookie)

	return app.Status(fiber.StatusOK).JSON(responses.UserResponse{Status: fiber.StatusOK, Message: "Logout Successful"})
}
