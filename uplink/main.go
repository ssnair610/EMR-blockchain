package main

// Importing required modules .

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html"
	"github.com/ssnair610/EMR-blockchain/uplink/initializers" // initializers contains envVars.go which will load in the required environment variables.
	"github.com/ssnair610/EMR-blockchain/uplink/routers"
	"log"
	"os"
)

func init() {
	initializers.LoadEnvVars() // Loading the environment variables before the main function is executed.
	//initializers.ConnectToDb() // Connect to the database
}

func main() {

	// Load templates
	engine := html.New("./views", ".tmpl") // Searches for tmpl(html) files in views directory

	// Create app
	app := fiber.New(fiber.Config{
		Views: engine,
	})
	// Configure app
	app.Static("/", "./public") // Configuring the app so that it can retrieve js and .css files from public directory

	//app.Use(cors.New(cors.Config{AllowCredentials: true}))
	// Routing

	routers.FrontEndRoutes(app)

	// Start app
	// Running the server on port 3000.
	if err := app.Listen(":" + os.Getenv("PORT")); err != nil {
		log.Fatal("Error occurred while starting the server , error is : ", err)

	}

	defer initializers.CloseClientDB()

}
