package main

// Importing required modules .

import (
	"github.com/gofiber/fiber/v2" // fiber is the webframework used for api , routing and hosting the local server.
	"github.com/gofiber/template/html"
	"github.com/ssnair610/EMR-blockchain/uplink/controllers"  // controllers contains homeController.go file which will render the main html/tmpl file when the local server is running.
	"github.com/ssnair610/EMR-blockchain/uplink/initializers" // initializers contains envVars.go which will load in the required environment variables.
	"log"
	"os"
)

func init() {
	initializers.LoadEnvVars() // Loading the environment variables before the main function is executed.
	//initializers.ConnectToDB()
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

	// Routing
	/*app.Get("/api/tasks", controllers.FetchTasks)
	app.Post("/api/tasks", controllers.CreateTask)
	app.Get("/api/tasks/:id", controllers.FetchTask)
	app.Delete("/api/tasks/:id", controllers.DeleteTask)*/

	frontendRoutes := []string{ // a slice which contains all the valid paths/routes that we will have
		"/",
		"/login",
		"/signUp",
		"/error_404",
	}

	for _, route := range frontendRoutes { // for loop iterates through those valid paths
		app.Get(route, controllers.Home)
	}

	// Start app
	err := app.Listen(":" + os.Getenv("PORT")) // Running the server on port 3000.
	if err != nil {
		log.Fatal("Error occurred while starting the server , error is : ", err)

		return
	}
}
