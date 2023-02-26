package initializers

import (
	"log"

	"github.com/joho/godotenv" // Module required to use .env files in go
)

func LoadEnvVars() { // Loading  the environment variables file.
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}
}
