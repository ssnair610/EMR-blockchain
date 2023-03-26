package controllers

import (
	"context"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/ssnair610/EMR-blockchain/uplink/initializers"
	"github.com/ssnair610/EMR-blockchain/uplink/models"
	"github.com/ssnair610/EMR-blockchain/uplink/responses"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"log"
	"strconv"
	"time"
)

var (
	userDetails = initializers.GetCollection(initializers.DB, "user", "details")
)

func SetUserDetails(name string, email string, id interface{}, app *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)

	defer cancel()

	setUserData := bson.M{
		"_id": id,

		"name": name,

		"email": email,

		"phoneNumber": nil,

		"doctorsName": nil,

		"ailments": nil,

		"medication": nil,

		"address": nil,

		"patientStatus": nil,

		"gender": nil,

		"Age": nil,
	}

	if _, err := userDetails.InsertOne(ctx, setUserData); err != nil {
		if err == mongo.ErrNoDocuments {

			// This error means your query did not match any documents.
			return app.Status(fiber.StatusBadRequest).JSON(responses.UserResponse{Status: fiber.StatusBadRequest, Message: "Account doesnt exist wow	", Data: &fiber.Map{"data": err.Error()}})

		}
		fmt.Println("you shouldn't be here")
		log.Fatal(err)
	}

	fmt.Println("Data is set")

	return app.Status(fiber.StatusOK).JSON(responses.UserResponse{Status: fiber.StatusOK, Message: "Account Details Updated"})

}

func GetUserDetails(app *fiber.Ctx) error {

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var user models.UserDetails

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

	if err = userDetails.FindOne(ctx, filter).Decode(&user); err != nil {
		if err == mongo.ErrNoDocuments {

			// This error means your query did not match any documents.
			return app.Status(fiber.StatusBadRequest).JSON(responses.UserResponse{Status: fiber.StatusBadRequest, Message: "Account doesnt exist wow	", Data: &fiber.Map{"data": err.Error()}})

		}
		log.Fatal(err)
	}

	return app.JSON(user)
}

func UpdateUserDetails(app *fiber.Ctx) error {

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var setData map[string]string

	defer cancel()

	if err := app.BodyParser(&setData); err != nil {
		return app.Status(fiber.StatusBadRequest).JSON(responses.UserResponse{Status: fiber.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

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

	age, _ := strconv.ParseInt(setData["Age"], 10, 64)
	ailments := []string{setData["Ailments"]}
	medication := []string{setData["Medication"]}

	setUserData := bson.D{
		{
			"name", setData["Name"],
		},
		{
			"phoneNumber", setData["PhoneNumber"],
		},
		{
			"doctorsName", setData["DoctorsName"],
		},
		{
			"ailments", ailments,
		},
		{
			"medication", medication,
		},
		{
			"address", setData["Address"],
		},
		{
			"patientStatus", setData["PatientStatus"],
		},
		{
			"gender", setData["Gender"],
		},
		{
			"Age", age,
		},
	}

	filter := bson.M{"_id": objectId}

	update := bson.D{{"$set", setUserData}}

	if _, err := userDetails.UpdateOne(ctx, filter, update); err != nil {
		if err == mongo.ErrNoDocuments {

			// This error means your query did not match any documents.
			return app.Status(fiber.StatusBadRequest).JSON(responses.UserResponse{Status: fiber.StatusBadRequest, Message: "Account doesnt exist wow	", Data: &fiber.Map{"data": err.Error()}})

		}
		fmt.Println("you shouldn't be here")
		log.Fatal(err)
	}

	fmt.Println("Data is updated")

	return app.Status(fiber.StatusOK).JSON(responses.UserResponse{Status: fiber.StatusOK, Message: "Account Details Updated"})
}
