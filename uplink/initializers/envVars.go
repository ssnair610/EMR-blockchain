package initializers

import (
	"github.com/joho/godotenv" // Module required to use .env files in go
	"log"
)

func LoadEnvVars() { // Loading  the environment variables file.
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}
}
