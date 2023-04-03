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
	Name     string `json:"drug name"`
	Dose     string `json:"dose"`
	Duration string `json:"duration"`
}

type FamilyMember struct {
	Age                  uint8  `json:"member age"`
	HealthAndPsychiatric string `json:"health and psychiatric"`
	AgeAtDeath           uint8  `json:"age at death"`
	Cause                string `json:"cause"`
}

type PreviousSymptoms struct {
	// General
	RecentWeightGain float32 `json:"recent weight gain"`
	Fatigue          bool    `json:"fatigue"`
	Weakness         bool    `json:"weakness"`
	Fever            bool    `json:"fever"`
	NightSweats      bool    `json:"night sweats"`

	// Muscle/Joints/Bones
	Numbness       bool   `json:"numbness"`
	JointPain      bool   `json:"joint pain"`
	MuscleWeakness bool   `json:"muscle weakness"`
	JointSwelling  string `json:"joint swelling"`

	// Ears
	RingingInEars bool `json:"ringing in the ears"`
	LossOfHearing bool `json:"loss of hearing"`

	// Eyes
	EyePain       bool `json:"eye pain"`
	EyeRedness    bool `json:"eye redness"`
	LossOfVision  bool `json:"loss of vision"`
	BlurredVision bool `json:"blurred vision"`
	EyeDryness    bool `json:"eye dryness"`

	// Throat
	FrequentSoreThroats    bool `json:"frequent sore throats"`
	ThroatHoarseness       bool `json:"throat hoarseness"`
	DifficultyInSwallowing bool `json:"difficulty in swallowing"`
	PainInJaw              bool `json:"pain in jaw"`

	// Heart and Lungs
	ChestPain         bool `json:"chest pain"`
	Palpitations      bool `json:"palpitations"`
	ShortnessOfBreath bool `json:"shortness of breath"`
	Fainting          bool `json:"fainting"`
	SwollenLegsOrFeet bool `json:"swollen legs or feet"`
	Cough             bool `json:"cough"`

	// Nervous System
	Headaches           bool `json:"headaches"`
	Dizziness           bool `json:"dizziness"`
	LossOfConsciousness bool `json:"loss of consciousness"`
	Tingling            bool `json:"tingling"`
	MemoryLoss          bool `json:"memory loss"`

	// Stomach and intestines
	Nausea                 bool `json:"nausea"`
	Heartburn              bool `json:"heartburn"`
	StomachPain            bool `json:"stomach pain"`
	Vomiting               bool `json:"vomiting"`
	YellowJaundice         bool `json:"yellow jaundice"`
	IncreasingConstipation bool `json:"increasing constipation"`
	PersistentDiarrhea     bool `json:"persistent diarrhea"`
	BloodInStools          bool `json:"blood in stools"`
	BlackStools            bool `json:"black stools"`

	// Skin
	SkinRedness  bool `json:"skin redness"`
	Rash         bool `json:"rash"`
	Bumps        bool `json:"bumps"`
	HairLoss     bool `json:"hair loss"`
	ColorChanges bool `json:"color changes"`

	// Blood
	Anemia bool `json:"anemia"`
	Clots  bool `json:"clots"`

	// Kidney/Urine/Bladder
	FrequentUrination bool `json:"frequent urination"`
	BloodInUrine      bool `json:"blood in urine"`

	// Women Only
	AbnormalPapSmear       bool `json:"abnormal pap smear"`
	IrregularPeriods       bool `json:"irregular periods"`
	BleedingBetweenPeriods bool `json:"bleeding between periods"`
	Pms                    bool `json:"PMS"`

	// Psychiatric
	Depression                    bool `json:"depression"`
	ExcessiveWorries              bool `json:"excessive worries"`
	DifficultyFallingAsleep       bool `json:"difficulty falling asleep"`
	DifficultyStayingAsleep       bool `json:"difficulty staying asleep"`
	DifficultiesWithSexualArousal bool `json:"difficulties with sexual arousal"`
	PoorAppetite                  bool `json:"poor appetite"`
	FoodCravings                  bool `json:"food cravings"`
	FrequentCrying                bool `json:"frequent crying"`
	Sensitivity                   bool `json:"sensitivity"`
	SuicidalThoughts              bool `json:"suicidal thoughts"`
	Stress                        bool `json:"stress"`
	Irritability                  bool `json:"irritability"`
	PoorConcentration             bool `json:"poor concentration"`
	RacingThoughts                bool `json:"racing thoughts"`
	Hallucinations                bool `json:"hallucinations"`
	RapidSpeech                   bool `json:"rapid speech"`
	GuiltyThoughts                bool `json:"guilty thoughts"`
	Paranoia                      bool `json:"paranoia"`
	MoodSwings                    bool `json:"mood swings"`
	Anxiety                       bool `json:"anxiety"`
	RiskyBehavior                 bool `json:"risky behavior"`

	OtherProblems string `json:"other problems"`
}

type WomensReproductiveHistory struct {
	AgeOfFirstPeriod     uint8 `json:"age of first period"`
	NumberOfPregancies   uint8 `json:"number of pregnancies"`
	NumberOfMiscarriages uint8 `json:"number of miscarriages"`
	NumberOfAbortions    uint8 `json:"number of abortions"`
	MenopauseAge         uint8 `json:"menopause age"`
	RegularPeriods       bool  `json:"regular periods"`
}

type SubstanceInfo struct {
	Category           string `json:"drug category"`
	AgeOfFirstUsed     uint8  `json:"age when you first used this"`
	AmountAndFrequency string `json:"amount and frequency"`
	Duration           string `json:"duration"`
	LastUsage          string `json:"last usage"`
	CurrentlyUsing     bool   `json:"currently using"`
}

type PersonalData struct {
	CreatedDate time.Time `json:"creation date"`
	Name        string    `json:"name"`
	Birthdate   Date      `json:"birthdate"`
	Age         uint8     `json:"age"`
	Gender      string    `json:"gender"` // need to change string to genderEnum

	ModeOfReach           string `json:"mode of reach"`
	SymptomsBrief         string `json:"symptoms brief"`
	PrevPractitioners     string `json:"previous practitioners"`
	PsychHospitalizations string `json:"psychiatric hospitalizations"`
	StatusECT             bool   `json:"ECT"`
	StatusPsychotherapy   bool   `json:"Psychotherapy"`
}

type CurrentMedications struct {
	DrugAllergies []string   `json:"drug allergies"`
	Medications   []DrugInfo `json:"medications"`
}

type PastMedicalHistory struct {
	Diabetes          bool   `json:"diabetes"`
	HighBloodPressure bool   `json:"high blood pressure"`
	HighCholesterol   bool   `json:"high cholesterol"`
	Hypothyroidism    bool   `json:"hypothyroidism"`
	Goiter            bool   `json:"goiter"`
	CancerType        string `json:"cancer type"`
	Leukemia          bool   `json:"luekemia"`
	Psoriasis         bool   `json:"psoriasis"`
	Angina            bool   `json:"angina"`
	HeartProblems     bool   `json:"heart problems"`

	HeartMurmur       bool `json:"heart murmur"`
	Pneumonia         bool `json:"pneumonia"`
	PulmonaryEmbolism bool `json:"pulmonary embolism"`
	Asthma            bool `json:"asthma"`
	Emphysema         bool `json:"emphysema"`
	Stroke            bool `json:"stroke"`
	Epilepsy          bool `json:"epilepsy"`
	Cataracts         bool `json:"cataracts"`
	KidneyDisease     bool `json:"kidney disease"`
	KidneyStones      bool `json:"kidney stones"`

	CrohnsDisease  bool `json:"crohns disease"`
	Colitis        bool `json:"colitis"`
	Anemia         bool `json:"anemia"`
	Jaundice       bool `json:"jaundice"`
	Hepatitis      bool `json:"hepatitis"`
	PepticUlcer    bool `json:"peptic ulcer"`
	RheumaticFever bool `json:"rheumatic fever"`
	Tuberculosis   bool `json:"tuberculosis"`
	Aids           bool `json:"aids"`

	Others []string `json:"others"`
}

type PersonalHistory struct {
	BirthProblems    string  `json:"birth problems"`
	PlaceOfBirth     string  `json:"place of birth"`
	MaritalStatus    int     `json:"marital status"` //need to change int to MarriageEnumm
	LatestOccupation string  `json:"latest occupation"`
	StatusWorking    bool    `json:"currently working"`
	HoursPerWeek     float32 `json:"hours per week"`
	StatusSSI        bool    `json:"SSI status"`
	DescSSI          string  `json:"SSI description"`
	LegalProblems    string  `json:"legal problems"`
	Religion         string  `json:"religion"`
}

type FamilyHistory struct {
	Father                 FamilyMember   `json:"father history"`
	Mother                 FamilyMember   `json:"mother history"`
	Siblings               []FamilyMember `json:"siblings history"`
	Children               []FamilyMember `json:"children history"`
	MaternalRelativeIssues string         `json:"maternal relative problems"`
	PaternalRelativeIssues string         `json:"paternal relative problems"`
}

type SystemsReview struct {
	PreviousSymptoms          PreviousSymptoms          `json:"previous symptoms"`
	WomensReproductiveHistory WomensReproductiveHistory `json:"womens reproductive history"`
}

type SubstanceUse struct {
	Alcohol          SubstanceInfo   `json:"alcohol"`
	Cannabis         SubstanceInfo   `json:"cannabis"`
	StimulantsA      SubstanceInfo   `json:"stimulants A"`
	StimulantsB      SubstanceInfo   `json:"stimulants B"`
	Amphetamines     SubstanceInfo   `json:"amphetamines"`
	Tranquilizers    SubstanceInfo   `json:"tranquilizers"`
	Sedatives        SubstanceInfo   `json:"sedatives"`
	Heroin           SubstanceInfo   `json:"heroin"`
	IllicitMethadone SubstanceInfo   `json:"illicit methadone"`
	OtherOpioids     SubstanceInfo   `json:"other opioids"`
	Hallucinogens    SubstanceInfo   `json:"hallucinogens"`
	Inhalants        SubstanceInfo   `json:"inhalants"`
	Others           []SubstanceInfo `json:"other substances"`
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
