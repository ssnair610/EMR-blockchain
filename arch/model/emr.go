package model

import "time"

type GenderEnum bool

const (
	GENDER_MALE GenderEnum = iota != 0
	GENDER_FEMALE GenderEnum = iota != 0
)

type Date struct {
	Year int
	Month int
	Day int
}

type drugInfo struct {
	name string `json:"drug name"`
	dose string `json:"dose"`
	duration string `json:"duration"`
}


type personalData struct {
	createdDate time.Time `json:"creation date"`
	name string `json:"name"`
	birthdate Date `json:"birthdate"`
	age uint `json:"age"`
	gender GenderEnum `json:"gender"`
	
	modeOfReach string `json:"mode of reach"`
	symptomsBrief string `json:"symptoms brief"`
	prevPractitioners string `json:"previous practitioners"`
	psychHospitalizations string `json:"psychiatric hospitalizations"`
	statusECT bool `json:"ECT"`
	statusPsychotherapy bool `json:"Psychotherapy"`
}

type currentMedications struct {
	drugAllergies []string `json:"drug allergies"`
	medications []drugInfo `json:"medications"`
}

type pastMedicalHistory struct {
	diabetes bool `json:"diabetes"`
	highBloodPressure bool `json:"high blood pressure"`
	highCholesterol bool `json:"high cholesterol"`
	hypothyroidism bool `json:"hypothyroidism"`
	goiter bool `json:"goiter"`
	cancerType string `json:"cancer type"`
	leukemia bool `json:"luekemia"`
	psoriasis bool `json:"psoriasis"`
	angina bool `json:"angina"`
	heartProblems bool `json:"heart problems"`

	heartMurmur bool `json:"heart murmur"`
	pneumonia bool `json:"pneumonia"`
	pulmonaryEmbolism bool `json:"pulmonary embolism"`
	asthma bool `json:"asthma"`
	emphysema bool `json:"emphysema"`
	stroke bool `json:"stroke"`
	epilepsy bool `json:"epilepsy"`
	cataracts bool `json:"cataracts"`
	kidneyDisease bool `json:"kidney disease"`
	kidneyStones bool `json:"kidney stones"`

	crohnsDisease bool `json:"crohns disease"`
	colitis bool `json:"colitis"`
	anemia bool `json:"anemia"`
	jaundice bool `json:"jaundice"`
	hepatitis bool `json:"hepatitis"`
	pepticUlcer bool `json:"peptic ulcer"`
	rheumaticFever bool `json:"rheumatic fever"`
	tuberculosis bool `json:"tuberculosis"`
	aids bool `json:"aids"`

	others []string `json:"others"`
}

type personalHistory struct {

}

type familyHistory struct {

}

type systemReview struct {

}

type substanceUse struct {

}


type EMR struct {
	PersonalData personalData `json:"personal"`
	CurrentMedications currentMedications `json:"current medications"`
	PastMedicalHistory pastMedicalHistory `json:"past medical history"`
	PersonalHistory personalHistory `json:"personal history"`
	FamilyHistory familyHistory `json:"family history"`
	SubstanceUse substanceUse `json:"substance use"`
}