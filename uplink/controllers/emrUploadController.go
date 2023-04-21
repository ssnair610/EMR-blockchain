/*

Author : Pranav
Created on : 04-04-2023
IDE : GoLand

*/

package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/ssnair610/EMR-blockchain/uplink/initializers"
	"github.com/ssnair610/EMR-blockchain/uplink/responses"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"log"
	"model"
	"time"
)

var userEmr = initializers.GetCollection(initializers.DB, "user", "emr")

func EmrUploadController(app *fiber.Ctx) error {

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)

	body := app.Body() // Get the request body
	var emrData model.EMR

	defer cancel()

	cookie := app.Cookies("jwt-token")
	token, err := jwt.ParseWithClaims(cookie, &jwt.RegisteredClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})

	if err != nil {
		return app.Status(fiber.StatusUnauthorized).JSON(responses.UserResponse{Status: fiber.StatusUnauthorized, Message: "User is Unauthenticated"})
	}

	claims := token.Claims.(*jwt.RegisteredClaims)
	_, err = primitive.ObjectIDFromHex(claims.Issuer)

	if err != nil {
		return app.Status(fiber.StatusBadRequest).JSON(responses.UserResponse{Status: fiber.StatusBadRequest, Message: "User not found in Database", Data: &fiber.Map{"data": err.Error()}})
	}

	if err = json.Unmarshal(body, &emrData); err != nil {
		return app.Status(fiber.StatusExpectationFailed).JSON(responses.UserResponse{Status: fiber.StatusExpectationFailed, Message: "Unable to read!!"})

	}

	if _, err := userEmr.InsertOne(ctx, emrData); err != nil {
		if err == mongo.ErrNoDocuments {

			// This error means your query did not match any documents.
			return app.Status(fiber.StatusBadRequest).JSON(responses.UserResponse{Status: fiber.StatusBadRequest, Message: "Account doesnt exist wow	", Data: &fiber.Map{"data": err.Error()}})

		}
		//fmt.Println("you shouldn't be here")
		log.Fatal(err)
	}

	fmt.Println("Data is set")

	return app.Status(fiber.StatusAccepted).JSON(responses.UserResponse{Status: fiber.StatusAccepted, Message: "Document accepted"})
}

func EmrDownloadController(app *fiber.Ctx) error {

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var patientEMR model.EMR

	defer cancel()

	cookie := app.Cookies("jwt-token")
	token, err := jwt.ParseWithClaims(cookie, &jwt.RegisteredClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})

	if err != nil {
		return app.Status(fiber.StatusUnauthorized).JSON(responses.UserResponse{Status: fiber.StatusUnauthorized, Message: "User is Unauthenticated"})
	}

	claims := token.Claims.(*jwt.RegisteredClaims)
	_, err = primitive.ObjectIDFromHex(claims.Issuer)

	if err != nil {
		return app.Status(fiber.StatusBadRequest).JSON(responses.UserResponse{Status: fiber.StatusBadRequest, Message: "Document not found in Database", Data: &fiber.Map{"data": err.Error()}})
	}

	objectID, err := primitive.ObjectIDFromHex("643e431a2150765dbceb937d")

	filter := bson.M{"_id": objectID}

	if err = userEmr.FindOne(ctx, filter).Decode(&patientEMR); err != nil {
		if err == mongo.ErrNoDocuments {

			// This error means your query did not match any documents.
			return app.Status(fiber.StatusBadRequest).JSON(responses.UserResponse{Status: fiber.StatusBadRequest, Message: "Account doesnt exist wow	", Data: &fiber.Map{"data": err.Error()}})

		}
		log.Fatal(err)
	}

	return app.JSON(patientEMR)
}
