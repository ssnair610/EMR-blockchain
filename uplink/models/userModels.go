package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID       primitive.ObjectID `json:"ID ,omitempty" bson:"_id,omitempty"`
	Name     string             `json:"Name,omitempty"`
	Email    string             `json:"Email,omitempty"`
	Password []byte             `json:"-"`
}
