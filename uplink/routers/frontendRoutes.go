package routers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/ssnair610/EMR-blockchain/uplink/controllers"
)

func FrontEndRoutes(app *fiber.App) {
	frontendRoutes := []string{ // a slice which contains all the valid paths/routes that we will have
		"/",
		"/login",
		"/signUp",
		"/error_404",
		"/edit_info",
		"/mainPage",
	}

	for _, route := range frontendRoutes { // for loop iterates through those valid paths
		app.Get(route, controllers.Home)
	}

	app.Post("/api/regeister", controllers.Regeister)
	app.Post("/api/login", controllers.Login)
	app.Get("/api/user", controllers.User)
	app.Post("/api/logOut", controllers.LogOut)

}
