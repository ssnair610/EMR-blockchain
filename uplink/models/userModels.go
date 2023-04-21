package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type (
	User struct {
		ID       primitive.ObjectID `json:"ID,omitempty" bson:"_id,omitempty"`
		Name     string             `json:"Name,omitempty"`
		Email    string             `json:"Email,omitempty"`
		Password []byte             `json:"-"`
	}
	UserDetails struct {
		ID                    primitive.ObjectID `json:"ID,omitempty" bson:"_id,omitempty"`
		CreatedDate           time.Time          `json:"CreatedDate"`
		Name                  string             `json:"Name"`
		Birthdate             string             `json:"Birthdate"`
		Age                   uint8              `json:"Age"`
		Gender                string             `json:"Gender"`
		ModeOfReach           string             `json:"ModeOfReach"`
		SymptomsBrief         string             `json:"SymptomsBrief"`
		PrevPractitioners     string             `json:"PrevPractitioners"`
		PsychHospitalizations string             `json:"PsychHospitalizations"`
		StatusECT             string             `json:"StatusECT"`
		StatusPsychotherapy   string             `json:"StatusPsychotherapy"`
		Email                 string             `json:"Email"`
	}
)
