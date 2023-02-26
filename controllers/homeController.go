package controllers

import "github.com/gofiber/fiber/v2"

func Home(c *fiber.Ctx) error { //Renders index.html when the "/" path is called .

	return c.Render("index", fiber.Map{})
}
