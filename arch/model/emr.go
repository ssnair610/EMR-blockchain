//package model
//
//import (
//	"time"
//)
//
//type GenderEnum bool
//
//const (
//	GENDER_MALE   GenderEnum = iota != 0
//	GENDER_FEMALE GenderEnum = iota != 0
//)
//
//type EducationEnum uint8
//
//const (
//	EDUCATION_HIGHSCHOOL   EducationEnum = iota
//	EDUCATION_COLLEGE      EducationEnum = iota
//	EDUCATION_COLLEGE_GRAD EducationEnum = iota
//	EDUCATION_ADVANCED_DEG EducationEnum = iota
//)
//
//type MarriageEnum uint8
//
//const (
//	MARRIAGE_NIL       MarriageEnum = iota
//	MARRIAGE_MARRIED   MarriageEnum = iota
//	MARRIAGE_DIVORCED  MarriageEnum = iota
//	MARRIAGE_SEPARATED MarriageEnum = iota
//	MARRIAGE_WIDOWED   MarriageEnum = iota
//	MARRIAGE_PARTNERED MarriageEnum = iota
//)
//
//type WorklessEnum uint8
//
//const (
//	WORKLESS_RETIRED  WorklessEnum = iota
//	WORKLESS_DISABLED WorklessEnum = iota
//	WORKLESS_SICK     WorklessEnum = iota
//)
//
//type Date struct {
//	Year  int `json:"Year"`
//	Month int `json:"Month"`
//	Day   int `json:"Day"`
//}
//
//type DrugInfo struct {
//	Name     string `json:"drug name"`
//	Dose     string `json:"dose"`
//	Duration string `json:"duration"`
//}
//
//type FamilyMember struct {
//	Age                  uint8  `json:"member age"`
//	HealthAndPsychiatric string `json:"health and psychiatric"`
//	AgeAtDeath           uint8  `json:"age at death"`
//	Cause                string `json:"cause"`
//}
//
//type PreviousSymptoms struct {
//	// General
//	RecentWeightGain float32 `json:"recent weight gain"`
//	Fatigue          bool    `json:"fatigue"`
//	Weakness         bool    `json:"weakness"`
//	Fever            bool    `json:"fever"`
//	NightSweats      bool    `json:"night sweats"`
//
//	// Muscle/Joints/Bones
//	Numbness       bool   `json:"numbness"`
//	JointPain      bool   `json:"joint pain"`
//	MuscleWeakness bool   `json:"muscle weakness"`
//	JointSwelling  string `json:"joint swelling"`
//
//	// Ears
//	RingingInEars bool `json:"ringing in the ears"`
//	LossOfHearing bool `json:"loss of hearing"`
//
//	// Eyes
//	EyePain       bool `json:"eye pain"`
//	EyeRedness    bool `json:"eye redness"`
//	LossOfVision  bool `json:"loss of vision"`
//	BlurredVision bool `json:"blurred vision"`
//	EyeDryness    bool `json:"eye dryness"`
//
//	// Throat
//	FrequentSoreThroats    bool `json:"frequent sore throats"`
//	ThroatHoarseness       bool `json:"throat hoarseness"`
//	DifficultyInSwallowing bool `json:"difficulty in swallowing"`
//	PainInJaw              bool `json:"pain in jaw"`
//
//	// Heart and Lungs
//	ChestPain         bool `json:"chest pain"`
//	Palpitations      bool `json:"palpitations"`
//	ShortnessOfBreath bool `json:"shortness of breath"`
//	Fainting          bool `json:"fainting"`
//	SwollenLegsOrFeet bool `json:"swollen legs or feet"`
//	Cough             bool `json:"cough"`
//
//	// Nervous System
//	Headaches           bool `json:"headaches"`
//	Dizziness           bool `json:"dizziness"`
//	LossOfConsciousness bool `json:"loss of consciousness"`
//	Tingling            bool `json:"tingling"`
//	MemoryLoss          bool `json:"memory loss"`
//
//	// Stomach and intestines
//	Nausea                 bool `json:"nausea"`
//	Heartburn              bool `json:"heartburn"`
//	StomachPain            bool `json:"stomach pain"`
//	Vomiting               bool `json:"vomiting"`
//	YellowJaundice         bool `json:"yellow jaundice"`
//	IncreasingConstipation bool `json:"increasing constipation"`
//	PersistentDiarrhea     bool `json:"persistent diarrhea"`
//	BloodInStools          bool `json:"blood in stools"`
//	BlackStools            bool `json:"black stools"`
//
//	// Skin
//	SkinRedness  bool `json:"skin redness"`
//	Rash         bool `json:"rash"`
//	Bumps        bool `json:"bumps"`
//	HairLoss     bool `json:"hair loss"`
//	ColorChanges bool `json:"color changes"`
//
//	// Blood
//	Anemia bool `json:"anemia"`
//	Clots  bool `json:"clots"`
//
//	// Kidney/Urine/Bladder
//	FrequentUrination bool `json:"frequent urination"`
//	BloodInUrine      bool `json:"blood in urine"`
//
//	// Women Only
//	AbnormalPapSmear       bool `json:"abnormal pap smear"`
//	IrregularPeriods       bool `json:"irregular periods"`
//	BleedingBetweenPeriods bool `json:"bleeding between periods"`
//	Pms                    bool `json:"PMS"`
//
//	// Psychiatric
//	Depression                    bool `json:"depression"`
//	ExcessiveWorries              bool `json:"excessive worries"`
//	DifficultyFallingAsleep       bool `json:"difficulty falling asleep"`
//	DifficultyStayingAsleep       bool `json:"difficulty staying asleep"`
//	DifficultiesWithSexualArousal bool `json:"difficulties with sexual arousal"`
//	PoorAppetite                  bool `json:"poor appetite"`
//	FoodCravings                  bool `json:"food cravings"`
//	FrequentCrying                bool `json:"frequent crying"`
//	Sensitivity                   bool `json:"sensitivity"`
//	SuicidalThoughts              bool `json:"suicidal thoughts"`
//	Stress                        bool `json:"stress"`
//	Irritability                  bool `json:"irritability"`
//	PoorConcentration             bool `json:"poor concentration"`
//	RacingThoughts                bool `json:"racing thoughts"`
//	Hallucinations                bool `json:"hallucinations"`
//	RapidSpeech                   bool `json:"rapid speech"`
//	GuiltyThoughts                bool `json:"guilty thoughts"`
//	Paranoia                      bool `json:"paranoia"`
//	MoodSwings                    bool `json:"mood swings"`
//	Anxiety                       bool `json:"anxiety"`
//	RiskyBehavior                 bool `json:"risky behavior"`
//
//	OtherProblems string `json:"other problems"`
//}
//
//type WomensReproductiveHistory struct {
//	AgeOfFirstPeriod     uint8 `json:"age of first period"`
//	NumberOfPregancies   uint8 `json:"number of pregnancies"`
//	NumberOfMiscarriages uint8 `json:"number of miscarriages"`
//	NumberOfAbortions    uint8 `json:"number of abortions"`
//	MenopauseAge         uint8 `json:"menopause age"`
//	RegularPeriods       bool  `json:"regular periods"`
//}
//
//type SubstanceInfo struct {
//	Category           string `json:"drug category"`
//	AgeOfFirstUsed     uint8  `json:"age when you first used this"`
//	AmountAndFrequency string `json:"amount and frequency"`
//	Duration           string `json:"duration"`
//	LastUsage          string `json:"last usage"`
//	CurrentlyUsing     bool   `json:"currently using"`
//}
//
//type PersonalData struct {
//	CreatedDate time.Time `json:"creation date"`
//	Name        string    `json:"name"`
//	Birthdate   Date      `json:"birthdate"`
//	Age         uint8     `json:"age"`
//	Gender      string    `json:"gender"` // need to change string to genderEnum
//
//	ModeOfReach           string `json:"mode of reach"`
//	SymptomsBrief         string `json:"symptoms brief"`
//	PrevPractitioners     string `json:"previous practitioners"`
//	PsychHospitalizations string `json:"psychiatric hospitalizations"`
//	StatusECT             bool   `json:"ECT"`
//	StatusPsychotherapy   bool   `json:"Psychotherapy"`
//}
//
//type CurrentMedications struct {
//	DrugAllergies []string   `json:"drug allergies"`
//	Medications   []DrugInfo `json:"medications"`
//}
//
//type PastMedicalHistory struct {
//	Diabetes          bool   `json:"diabetes"`
//	HighBloodPressure bool   `json:"high blood pressure"`
//	HighCholesterol   bool   `json:"high cholesterol"`
//	Hypothyroidism    bool   `json:"hypothyroidism"`
//	Goiter            bool   `json:"goiter"`
//	CancerType        string `json:"cancer type"`
//	Leukemia          bool   `json:"luekemia"`
//	Psoriasis         bool   `json:"psoriasis"`
//	Angina            bool   `json:"angina"`
//	HeartProblems     bool   `json:"heart problems"`
//
//	HeartMurmur       bool `json:"heart murmur"`
//	Pneumonia         bool `json:"pneumonia"`
//	PulmonaryEmbolism bool `json:"pulmonary embolism"`
//	Asthma            bool `json:"asthma"`
//	Emphysema         bool `json:"emphysema"`
//	Stroke            bool `json:"stroke"`
//	Epilepsy          bool `json:"epilepsy"`
//	Cataracts         bool `json:"cataracts"`
//	KidneyDisease     bool `json:"kidney disease"`
//	KidneyStones      bool `json:"kidney stones"`
//
//	CrohnsDisease  bool `json:"crohns disease"`
//	Colitis        bool `json:"colitis"`
//	Anemia         bool `json:"anemia"`
//	Jaundice       bool `json:"jaundice"`
//	Hepatitis      bool `json:"hepatitis"`
//	PepticUlcer    bool `json:"peptic ulcer"`
//	RheumaticFever bool `json:"rheumatic fever"`
//	Tuberculosis   bool `json:"tuberculosis"`
//	Aids           bool `json:"aids"`
//
//	Others []string `json:"others"`
//}
//
//type PersonalHistory struct {
//	BirthProblems    string  `json:"birth problems"`
//	PlaceOfBirth     string  `json:"place of birth"`
//	MaritalStatus    int     `json:"marital status"` //need to change int to MarriageEnumm
//	LatestOccupation string  `json:"latest occupation"`
//	StatusWorking    bool    `json:"currently working"`
//	HoursPerWeek     float32 `json:"hours per week"`
//	StatusSSI        bool    `json:"SSI status"`
//	DescSSI          string  `json:"SSI description"`
//	LegalProblems    string  `json:"legal problems"`
//	Religion         string  `json:"religion"`
//}
//
//type FamilyHistory struct {
//	Father                 FamilyMember   `json:"father history"`
//	Mother                 FamilyMember   `json:"mother history"`
//	Siblings               []FamilyMember `json:"siblings history"`
//	Children               []FamilyMember `json:"children history"`
//	MaternalRelativeIssues string         `json:"maternal relative problems"`
//	PaternalRelativeIssues string         `json:"paternal relative problems"`
//}
//
//type SystemsReview struct {
//	PreviousSymptoms          PreviousSymptoms          `json:"previous symptoms"`
//	WomensReproductiveHistory WomensReproductiveHistory `json:"womens reproductive history"` // need to implement/update in medicalHistory.tsx
//}
//
//type SubstanceUse struct {
//	Alcohol          SubstanceInfo   `json:"alcohol"`
//	Cannabis         SubstanceInfo   `json:"cannabis"`
//	StimulantsA      SubstanceInfo   `json:"stimulants A"`
//	StimulantsB      SubstanceInfo   `json:"stimulants B"`
//	Amphetamines     SubstanceInfo   `json:"amphetamines"`
//	Tranquilizers    SubstanceInfo   `json:"tranquilizers"`
//	Sedatives        SubstanceInfo   `json:"sedatives"`
//	Heroin           SubstanceInfo   `json:"heroin"`
//	IllicitMethadone SubstanceInfo   `json:"illicit methadone"`
//	OtherOpioids     SubstanceInfo   `json:"other opioids"`
//	Hallucinogens    SubstanceInfo   `json:"hallucinogens"`
//	Inhalants        SubstanceInfo   `json:"inhalants"`
//	Others           []SubstanceInfo `json:"other substances"`
//}
//
////type EMR struct {
////	PersonalData       personalData       `json:"PersonalData"`
////	CurrentMedications currentMedications `json:"CurrentMedications"`
////	PastMedicalHistory pastMedicalHistory `json:"PastMedicalHistory"`
////	PersonalHistory    personalHistory    `json:"PersonalHistory"`
////	FamilyHistory      familyHistory      `json:"FamilyHistory"`
////	SystemsReview      systemsReview      `json:"SystemsReview"`
////	SubstanceUse       substanceUse       `json:"SubstanceUse"`
////}
//
//type EMR struct {
//	PersonalData       PersonalData       `json:"PersonalData"`
//	CurrentMedications CurrentMedications `json:"CurrentMedications"`
//	PastMedicalHistory PastMedicalHistory `json:"PastMedicalHistory"`
//	PersonalHistory    PersonalHistory    `json:"PersonalHistory"`
//	FamilyHistory      FamilyHistory      `json:"FamilyHistory"`
//	SystemsReview      SystemsReview      `json:"SystemsReview"`
//	SubstanceUse       SubstanceUse       `json:"SubstanceUse"`
//}
//

package model

import (
	"time"
)

type GenderEnum bool

const (
	GENDER_MALE   GenderEnum = iota != 0
	GENDER_FEMALE GenderEnum = iota != 0
)

type EducationEnum uint8

const (
	EDUCATION_HIGHSCHOOL   EducationEnum = iota
	EDUCATION_COLLEGE      EducationEnum = iota
	EDUCATION_COLLEGE_GRAD EducationEnum = iota
	EDUCATION_ADVANCED_DEG EducationEnum = iota
)

type MarriageEnum uint8

const (
	MARRIAGE_NIL       MarriageEnum = iota
	MARRIAGE_MARRIED   MarriageEnum = iota
	MARRIAGE_DIVORCED  MarriageEnum = iota
	MARRIAGE_SEPARATED MarriageEnum = iota
	MARRIAGE_WIDOWED   MarriageEnum = iota
	MARRIAGE_PARTNERED MarriageEnum = iota
)

type WorklessEnum uint8

const (
	WORKLESS_RETIRED  WorklessEnum = iota
	WORKLESS_DISABLED WorklessEnum = iota
	WORKLESS_SICK     WorklessEnum = iota
)

type Date struct {
	Year  int `json:"Year"`
	Month int `json:"Month"`
	Day   int `json:"Day"`
}

type DrugInfo struct {
	Name     string `json:"Name"`
	Dose     string `json:"Dose"`
	Duration string `json:"Duration"`
}

type FamilyMember struct {
	Age                  uint8  `json:"Age"`
	HealthAndPsychiatric string `json:"HealthAndPsychiatric"`
	AgeAtDeath           uint8  `json:"AgeAtDeath"`
	Cause                string `json:"Cause"`
}

type PreviousSymptoms struct {
	// General
	RecentWeightGain string `json:"RecentWeightGain"`
	Fatigue          bool   `json:"Fatigue"`
	Weakness         bool   `json:"Weakness"`
	Fever            bool   `json:"Fever"`
	NightSweats      bool   `json:"NightSweats "`

	// Muscle/Joints/Bones
	Numbness       bool   `json:"Numbness"`
	JointPain      bool   `json:"JointPain"`
	MuscleWeakness bool   `json:"MuscleWeakness"`
	JointSwelling  string `json:"JointSwelling"`

	// Ears
	RingingInTheEars bool `json:"RingingInTheEars"`
	LossOfHearing    bool `json:"LossOfHearing"`

	// Eye
	EyePain       bool `json:"EyePain"`
	EyeRedness    bool `json:"EyeRedness"`
	LossOfVision  bool `json:"LossOfVision"`
	BlurredVision bool `json:"BlurredVision"`
	EyeDryness    bool `json:"EyeDryness"`

	// Throat
	FrequentSoreThroats    bool `json:"FrequentSoreThroats"`
	ThroatHoarseness       bool `json:"ThroatHoarseness"`
	DifficultyInSwallowing bool `json:"DifficultyInSwallowing"`
	PainInJaw              bool `json:"PainInJaw "`

	// Heart and Lungs
	ChestPain         bool `json:"ChestPain"`
	Palpitations      bool `json:"Palpitations"`
	ShortnessOfBreath bool `json:"ShortnessOfBreath"`
	Fainting          bool `json:"Fainting"`
	SwollenLegsOrFeet bool `json:"SwollenLegsOrFeet"`
	Cough             bool `json:"Cough"`

	// Nervous System
	Headaches           bool `json:"Headaches"`
	Dizziness           bool `json:"Dizziness"`
	LossOfConsciousness bool `json:"LossOfConsciousness"`
	Tingling            bool `json:"Tingling"`
	MemoryLoss          bool `json:"MemoryLoss "`

	// Stomach and intestines
	Nausea                 bool `json:"Nausea"`
	Heartburn              bool `json:"Heartburn"`
	StomachPain            bool `json:"StomachPain"`
	Vomiting               bool `json:"Vomiting"`
	YellowJaundice         bool `json:"YellowJaundice"`
	IncreasingConstipation bool `json:"IncreasingConstipation"`
	PersistentDiarrhea     bool `json:"PersistentDiarrhea"`
	BloodInStools          bool `json:"BloodInStools"`
	BlackStools            bool `json:"BlackStools"`

	// Skin
	SkinRedness  bool `json:"SkinRedness"`
	Rash         bool `json:"Rash"`
	Bumps        bool `json:"Bumps"`
	HairLoss     bool `json:"HairLoss"`
	ColorChanges bool `json:"ColorChanges"`

	// Blood
	Anemia bool `json:"Anemia"`
	Clots  bool `json:"Clots"`

	// Kidney/Urine/Bladder
	FrequentUrination bool `json:"FrequentUrination"`
	BloodInUrine      bool `json:"BloodInUrine"`

	// Women Only
	AbnormalPapSmear       bool `json:"AbnormalPapSmear"`
	IrregularPeriods       bool `json:"IrregularPeriods"`
	BleedingBetweenPeriods bool `json:"BleedingBetweenPeriods"`
	Pms                    bool `json:"Pms"`

	// Psychiatric
	Depression                    bool `json:"Depression"`
	ExcessiveWorries              bool `json:"ExcessiveWorries"`
	DifficultyFallingAsleep       bool `json:"DifficultyFallingAsleep"`
	DifficultyStayingAsleep       bool `json:"DifficultyStayingAsleep"`
	DifficultiesWithSexualArousal bool `json:"DifficultiesWithSexualArousal"`
	PoorAppetite                  bool `json:"PoorAppetite"`
	FoodCravings                  bool `json:"FoodCravings"`
	FrequentCrying                bool `json:"FrequentCrying"`
	Sensitivity                   bool `json:"Sensitivity"`
	SuicidalThoughts              bool `json:"SuicidalThoughts"`
	Stress                        bool `json:"Stress"`
	Irritability                  bool `json:"Irritability"`
	PoorConcentration             bool `json:"PoorConcentration"`
	RacingThoughts                bool `json:"RacingThoughts"`
	Hallucinations                bool `json:"Hallucinations"`
	RapidSpeech                   bool `json:"RapidSpeech"`
	GuiltyThoughts                bool `json:"GuiltyThoughts"`
	Paranoia                      bool `json:"Paranoia"`
	MoodSwings                    bool `json:"MoodSwings"`
	Anxiety                       bool `json:"Anxiety"`
	RiskyBehavior                 bool `json:"RiskyBehavior"`

	OtherProblems string `json:"OtherProblems"`
}

type WomensReproductiveHistory struct {
	AgeOfFirstPeriod     uint8 `json:"AgeOfFirstPeriod"`
	NumberOfPregancies   uint8 `json:"NumberOfPregancies"`
	NumberOfMiscarriages uint8 `json:"NumberOfMiscarriages"`
	NumberOfAbortions    uint8 `json:"NumberOfAbortions"`
	MenopauseAge         uint8 `json:"MenopauseAge"`
	RegularPeriods       bool  `json:"RegularPeriods"`
}

type SubstanceInfo struct {
	Category           string `json:"Category"`
	AgeOfFirstUsed     uint8  `json:"AgeOfFirstUsed"`
	AmountAndFrequency string `json:"AmountAndFrequency"`
	Duration           string `json:"Duration"`
	LastUsage          string `json:"LastUsage"`
	CurrentlyUsing     bool   `json:"CurrentlyUsing"`
}

type PersonalData struct {
	CreatedDate           time.Time `json:"CreatedDate"`
	Name                  string    `json:"Name"`
	Birthdate             Date      `json:"Birthdate"`
	Age                   uint8     `json:"Age"`
	Gender                string    `json:"Gender"`
	ModeOfReach           string    `json:"ModeOfReach"`
	SymptomsBrief         string    `json:"SymptomsBrief"`
	PrevPractitioners     string    `json:"PrevPractitioners"`
	PsychHospitalizations string    `json:"PsychHospitalizations"`
	StatusECT             bool      `json:"StatusECT"`
	StatusPsychotherapy   bool      `json:"StatusPsychotherapy"`
}

type CurrentMedications struct {
	DrugAllergies []string   `json:"DrugAllergies"`
	Medications   []DrugInfo `json:"Medications"`
}

type PastMedicalHistory struct {
	Diabetes          bool     `json:"Diabetes"`
	HighBloodPressure bool     `json:"HighBloodPressure"`
	HighCholesterol   bool     `json:"HighCholesterol"`
	Hypothyroidism    bool     `json:"Hypothyroidism"`
	Goiter            bool     `json:"Goiter"`
	CancerType        string   `json:"CancerType"`
	Leukemia          bool     `json:"Leukemia"`
	Psoriasis         bool     `json:"Psoriasis"`
	Angina            bool     `json:"Angina"`
	HeartProblems     bool     `json:"HeartProblems"`
	HeartMurmur       bool     `json:"HeartMurmur"`
	Pneumonia         bool     `json:"Pneumonia"`
	PulmonaryEmbolism bool     `json:"PulmonaryEmbolism"`
	Asthma            bool     `json:"Asthma"`
	Emphysema         bool     `json:"Emphysema"`
	Stroke            bool     `json:"Stroke"`
	Epilepsy          bool     `json:"Epilepsy"`
	Cataracts         bool     `json:"Cataracts"`
	KidneyDisease     bool     `json:"KidneyDisease"`
	KidneyStones      bool     `json:"KidneyStones"`
	CrohnsDisease     bool     `json:"CrohnsDisease"`
	Colitis           bool     `json:"Colitis"`
	Anemia            bool     `json:"Anemia"`
	Jaundice          bool     `json:"Jaundice"`
	Hepatitis         bool     `json:"Hepatitis"`
	PepticUlcer       bool     `json:"PepticUlcer"`
	RheumaticFever    bool     `json:"RheumaticFever"`
	Tuberculosis      bool     `json:"Tuberculosis"`
	Aids              bool     `json:"Aids"`
	Others            []string `json:"Others"`
}

type PersonalHistory struct {
	BirthProblems    string `json:"BirthProblems"`
	PlaceOfBirth     string `json:"PlaceOfBirth"`
	MaritalStatus    string `json:"MaritalStatus"`
	LatestOccupation string `json:"LatestOccupation"`
	StatusWorking    bool   `json:"StatusWorking"`
	HoursPerWeek     string `json:"HoursPerWeek"`
	StatusSSI        bool   `json:"StatusSSI"`
	DescSSI          string `json:"DescSSI"`
	LegalProblems    string `json:"LegalProblems"`
	Religion         string `json:"Religion"`
}

type FamilyHistory struct {
	Father                 FamilyMember   `json:"Father"`
	Mother                 FamilyMember   `json:"Mother"`
	Siblings               []FamilyMember `json:"Siblings"`
	Children               []FamilyMember `json:"Children"`
	MaternalRelativeIssues string         `json:"MaternalRelativeIssues"`
	PaternalRelativeIssues string         `json:"PaternalRelativeIssues"`
}

type SystemsReview struct {
	PreviousSymptoms          PreviousSymptoms          `json:"PreviousSymptoms"`
	WomensReproductiveHistory WomensReproductiveHistory `json:"WomensReproductiveHistory"` // need to implement/update in medicalHistory.tsx
}

type SubstanceUse struct {
	Alcohol          SubstanceInfo   `json:"Alcohol"`
	Cannabis         SubstanceInfo   `json:"Cannabis"`
	StimulantsA      SubstanceInfo   `json:"StimulantsA"`
	StimulantsB      SubstanceInfo   `json:"StimulantsB"`
	Amphetamines     SubstanceInfo   `json:"Amphetamines"`
	Tranquilizers    SubstanceInfo   `json:"Tranquilizers"`
	Sedatives        SubstanceInfo   `json:"Sedatives"`
	Heroin           SubstanceInfo   `json:"Heroin"`
	IllicitMethadone SubstanceInfo   `json:"IllicitMethadone"`
	OtherOpioids     SubstanceInfo   `json:"OtherOpioids"`
	Hallucinogens    SubstanceInfo   `json:"OtherOpioids"`
	Inhalants        SubstanceInfo   `json:"Hallucinogens"`
	Others           []SubstanceInfo `json:"Inhalants"`
}

//type EMR struct {
//	PersonalData       personalData       `json:"PersonalData"`
//	CurrentMedications currentMedications `json:"CurrentMedications"`
//	PastMedicalHistory pastMedicalHistory `json:"PastMedicalHistory"`
//	PersonalHistory    personalHistory    `json:"PersonalHistory"`
//	FamilyHistory      familyHistory      `json:"FamilyHistory"`
//	SystemsReview      systemsReview      `json:"SystemsReview"`
//	SubstanceUse       substanceUse       `json:"SubstanceUse"`
//}

type EMR struct {
	PersonalData       PersonalData       `json:"PersonalData"`
	CurrentMedications CurrentMedications `json:"CurrentMedications"`
	PastMedicalHistory PastMedicalHistory `json:"PastMedicalHistory"`
	PersonalHistory    PersonalHistory    `json:"PersonalHistory"`
	FamilyHistory      FamilyHistory      `json:"FamilyHistory"`
	SystemsReview      SystemsReview      `json:"SystemsReview"`
	SubstanceUse       SubstanceUse       `json:"SubstanceUse"`
}
