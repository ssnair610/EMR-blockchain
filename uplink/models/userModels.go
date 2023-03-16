package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type (
	User struct {
		ID       primitive.ObjectID `json:"ID,omitempty" bson:"_id,omitempty"`
		Name     string             `json:"Name,omitempty"`
		Email    string             `json:"Email,omitempty"`
		Password []byte             `json:"-"`
	}
	UserDetails struct {
		ID            primitive.ObjectID `json:"ID,omitempty" bson:"_id,omitempty"`
		Name          string             `json:"Name,omitempty"`
		Email         string             `json:"Email,omitempty"`
		Age           int64              `json:"Age,omitempty"`
		PhoneNumber   string             `json:"PhoneNumber,omitempty"`
		DoctorsName   string             `json:"DoctorsName,omitempty"`
		Ailments      []string           `json:"Ailments,omitempty"`
		Medication    []string           `json:"Medication,omitempty"`
		Address       string             `json:"Address,omitempty"`
		PatientStatus string             `json:"PatientStatus,omitempty"`
		Gender        string             `json:"Gender,omitempty"`
	}
)
