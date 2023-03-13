package model

import "time"

type GenderEnum bool

const (
<<<<<<< HEAD
	GENDER_MALE GenderEnum = iota != 0
	GENDER_FEMALE GenderEnum = iota != 0
)


type EducationEnum uint8

const (
	EDUCATION_HIGHSCHOOL EducationEnum = iota
	EDUCATION_COLLEGE EducationEnum = iota
=======
	GENDER_MALE   GenderEnum = iota != 0
	GENDER_FEMALE GenderEnum = iota != 0
)

type EducationEnum uint8

const (
	EDUCATION_HIGHSCHOOL   EducationEnum = iota
	EDUCATION_COLLEGE      EducationEnum = iota
>>>>>>> 2f725db1d8ce935d5cc2b5eda1236e068e4bff87
	EDUCATION_COLLEGE_GRAD EducationEnum = iota
	EDUCATION_ADVANCED_DEG EducationEnum = iota
)

<<<<<<< HEAD

type MarriageEnum uint8

const (
	MARRIAGE_NIL MarriageEnum = iota
	MARRIAGE_MARRIED MarriageEnum = iota
	MARRIAGE_DIVORCED MarriageEnum = iota
	MARRIAGE_SEPARATED MarriageEnum = iota
	MARRIAGE_WIDOWED MarriageEnum = iota
	MARRIAGE_PARTNERED MarriageEnum = iota
)


type WorklessEnum uint8

const (
	WORKLESS_RETIRED WorklessEnum = iota
	WORKLESS_DISABLED WorklessEnum = iota
	WORKLESS_SICK WorklessEnum = iota
)


type Date struct {
	Year int
	Month int
	Day int
}

type drugInfo struct {
	name string `json:"drug name"`
	dose string `json:"dose"`
=======
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
	Year  int
	Month int
	Day   int
}

type drugInfo struct {
	name     string `json:"drug name"`
	dose     string `json:"dose"`
>>>>>>> 2f725db1d8ce935d5cc2b5eda1236e068e4bff87
	duration string `json:"duration"`
}

type familyMember struct {
<<<<<<< HEAD
	age uint8 `json:"member age"`
	healthAndPsychiatric string `json:"health and psychiatric"`
	ageAtDeath uint8 `json:"age at death"`
	cause string `json:"cause"`
=======
	age                  uint8  `json:"member age"`
	healthAndPsychiatric string `json:"health and psychiatric"`
	ageAtDeath           uint8  `json:"age at death"`
	cause                string `json:"cause"`
>>>>>>> 2f725db1d8ce935d5cc2b5eda1236e068e4bff87
}

type previousSymptoms struct {
	// General
	recentWeightGain float32 `json:"recent weight gain"`
<<<<<<< HEAD
	fatigue bool `json:"fatigue"`
	weakness bool `json:"weakness"`
	fever bool `json:"fever"`
	nightSweats bool `json:"night sweats"`

	// Muscle/Joints/Bones
	numbness bool `json:"numbness"`
	jointPain bool `json:"joint pain"`
	muscleWeakness bool `json:"muscle weakness"`
	jointSwelling string `json:"joint swelling"`
=======
	fatigue          bool    `json:"fatigue"`
	weakness         bool    `json:"weakness"`
	fever            bool    `json:"fever"`
	nightSweats      bool    `json:"night sweats"`

	// Muscle/Joints/Bones
	numbness       bool   `json:"numbness"`
	jointPain      bool   `json:"joint pain"`
	muscleWeakness bool   `json:"muscle weakness"`
	jointSwelling  string `json:"joint swelling"`
>>>>>>> 2f725db1d8ce935d5cc2b5eda1236e068e4bff87

	// Ears
	ringingInEars bool `json:"ringing in the ears"`
	lossOfHearing bool `json:"loss of hearing"`

	// Eyes
<<<<<<< HEAD
	eyePain bool `json:"eye pain"`
	eyeRedness bool `json:"eye redness"`
	lossOfVision bool `json:"loss of vision"`
	blurredVision bool `json:"blurred vision"`
	eyeDryness bool `json:"eye dryness"`

	// Throat
	frequentSoreThroats bool `json:"frequent sore throats"`
	throatHoarseness bool `json:"throat hoarseness"`
	difficultyInSwallowing bool `json:"difficulty in swallowing"`
	painInJaw bool `json:"pain in jaw"`

	// Heart and Lungs
	chestPain bool `json:"chest pain"`
	palpitations bool `json:"palpitations"`
	shortnessOfBreath bool `json:"shortness of breath"`
	fainting bool `json:"fainting"`
	swollenLegsOrFeet bool `json:"swollen legs or feet"`
	cough bool `json:"cough"`

	// Nervous System
	headaches bool `json:"headaches"`
	dizziness bool `json:"dizziness"`
	lossOfConsciousness bool `json:"loss of consciousness"`
	tingling bool `json:"tingling"`
	memoryLoss bool `json:"memory loss"`
	
	// Stomach and intestines
	nausea bool `json:"nausea"`
	heartburn bool `json:"heartburn"`
	stomachPain bool `json:"stomach pain"`
	vomiting bool `json:"vomiting"`
	yellowJaundice bool `json:"yellow jaundice"`
	increasingConstipation bool `json:"increasing constipation"`
	persistentDiarrhea bool `json:"persistent diarrhea"`
	bloodInStools bool `json:"blood in stools"`
	blackStools bool `json:"black stools"`

	// Skin
	skinRedness bool `json:"skin redness"`
	rash bool `json:"rash"`
	bumps bool `json:"bumps"`
	hairLoss bool `json:"hair loss"`
=======
	eyePain       bool `json:"eye pain"`
	eyeRedness    bool `json:"eye redness"`
	lossOfVision  bool `json:"loss of vision"`
	blurredVision bool `json:"blurred vision"`
	eyeDryness    bool `json:"eye dryness"`

	// Throat
	frequentSoreThroats    bool `json:"frequent sore throats"`
	throatHoarseness       bool `json:"throat hoarseness"`
	difficultyInSwallowing bool `json:"difficulty in swallowing"`
	painInJaw              bool `json:"pain in jaw"`

	// Heart and Lungs
	chestPain         bool `json:"chest pain"`
	palpitations      bool `json:"palpitations"`
	shortnessOfBreath bool `json:"shortness of breath"`
	fainting          bool `json:"fainting"`
	swollenLegsOrFeet bool `json:"swollen legs or feet"`
	cough             bool `json:"cough"`

	// Nervous System
	headaches           bool `json:"headaches"`
	dizziness           bool `json:"dizziness"`
	lossOfConsciousness bool `json:"loss of consciousness"`
	tingling            bool `json:"tingling"`
	memoryLoss          bool `json:"memory loss"`

	// Stomach and intestines
	nausea                 bool `json:"nausea"`
	heartburn              bool `json:"heartburn"`
	stomachPain            bool `json:"stomach pain"`
	vomiting               bool `json:"vomiting"`
	yellowJaundice         bool `json:"yellow jaundice"`
	increasingConstipation bool `json:"increasing constipation"`
	persistentDiarrhea     bool `json:"persistent diarrhea"`
	bloodInStools          bool `json:"blood in stools"`
	blackStools            bool `json:"black stools"`

	// Skin
	skinRedness  bool `json:"skin redness"`
	rash         bool `json:"rash"`
	bumps        bool `json:"bumps"`
	hairLoss     bool `json:"hair loss"`
>>>>>>> 2f725db1d8ce935d5cc2b5eda1236e068e4bff87
	colorChanges bool `json:"color changes"`

	// Blood
	anemia bool `json:"anemia"`
<<<<<<< HEAD
	clots bool `json:"clots"`

	// Kidney/Urine/Bladder
	frequentUrination bool `json:"frequent urination"`
	bloodInUrine bool `json:"blood in urine"`

	// Women Only
	abnormalPapSmear bool `json:"abnormal pap smear"`
	irregularPeriods bool `json:"irregular periods"`
	bleedingBetweenPeriods bool `json:"bleeding between periods"`
	pms bool `json:"PMS"`

	// Psychiatric
	depression bool `json:"depression"`
	excessiveWorries bool `json:"excessive worries"`
	difficultyFallingAsleep bool  `json:"difficulty falling asleep"`
	difficultyStayingAsleep bool `json:"difficulty staying asleep"`
	difficultiesWithSexualArousal bool `json:"difficulties with sexual arousal"`
	poorAppetite bool `json:"poor appetite"`
	foodCravings bool `json:"food cravings"`
	frequentCrying bool `json:"frequent crying"`
	sensitivity bool `json:"sensitivity"`
	suicidalThoughts bool `json:"suicidal thoughts"`
	stress bool `json:"stress"`
	irritability bool `json:"irritability"`
	poorConcentration bool `json:"poor concentration"`
	racingThoughts bool `json:"racing thoughts"`
	hallucinations bool `json:"hallucinations"`
	rapidSpeech bool `json:"rapid speech"`
	guiltyThoughts bool `json:"guilty thoughts"`
	paranoia bool `json:"paranoia"`
	moodSwings bool `json:"mood swings"`
	anxiety bool `json:"anxiety"`
	riskyBehavior bool `json:"risky behavior"`
=======
	clots  bool `json:"clots"`

	// Kidney/Urine/Bladder
	frequentUrination bool `json:"frequent urination"`
	bloodInUrine      bool `json:"blood in urine"`

	// Women Only
	abnormalPapSmear       bool `json:"abnormal pap smear"`
	irregularPeriods       bool `json:"irregular periods"`
	bleedingBetweenPeriods bool `json:"bleeding between periods"`
	pms                    bool `json:"PMS"`

	// Psychiatric
	depression                    bool `json:"depression"`
	excessiveWorries              bool `json:"excessive worries"`
	difficultyFallingAsleep       bool `json:"difficulty falling asleep"`
	difficultyStayingAsleep       bool `json:"difficulty staying asleep"`
	difficultiesWithSexualArousal bool `json:"difficulties with sexual arousal"`
	poorAppetite                  bool `json:"poor appetite"`
	foodCravings                  bool `json:"food cravings"`
	frequentCrying                bool `json:"frequent crying"`
	sensitivity                   bool `json:"sensitivity"`
	suicidalThoughts              bool `json:"suicidal thoughts"`
	stress                        bool `json:"stress"`
	irritability                  bool `json:"irritability"`
	poorConcentration             bool `json:"poor concentration"`
	racingThoughts                bool `json:"racing thoughts"`
	hallucinations                bool `json:"hallucinations"`
	rapidSpeech                   bool `json:"rapid speech"`
	guiltyThoughts                bool `json:"guilty thoughts"`
	paranoia                      bool `json:"paranoia"`
	moodSwings                    bool `json:"mood swings"`
	anxiety                       bool `json:"anxiety"`
	riskyBehavior                 bool `json:"risky behavior"`
>>>>>>> 2f725db1d8ce935d5cc2b5eda1236e068e4bff87

	otherProblems string `json:"other problems"`
}

type womensReproductiveHistory struct {
<<<<<<< HEAD
	ageOfFirstPeriod uint8 `json:"age of first period"`
	numberOfPregancies uint8 `json:"number of pregnancies"`
	numberOfMiscarriages uint8 `json:"number of miscarriages"`
	numberOfAbortions uint8 `json:"number of abortions"`
	menopauseAge uint8 `json:"menopause age"`
	regularPeriods bool `json:"regular periods"`
}

type substanceInfo struct {
	category string `json:"drug category"`
	ageOfFirstUsed uint8 `json:"age when you first used this"`
	amountAndFrequency string `json:"amount and frequency"`
	duration string `json:"duration"`
	lastUsage string `json:"last usage"`
	currentlyUsing bool `json:"currently using"`
}


type personalData struct {
	createdDate time.Time `json:"creation date"`
	name string `json:"name"`
	birthdate Date `json:"birthdate"`
	age uint8 `json:"age"`
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
=======
	ageOfFirstPeriod     uint8 `json:"age of first period"`
	numberOfPregancies   uint8 `json:"number of pregnancies"`
	numberOfMiscarriages uint8 `json:"number of miscarriages"`
	numberOfAbortions    uint8 `json:"number of abortions"`
	menopauseAge         uint8 `json:"menopause age"`
	regularPeriods       bool  `json:"regular periods"`
}

type substanceInfo struct {
	category           string `json:"drug category"`
	ageOfFirstUsed     uint8  `json:"age when you first used this"`
	amountAndFrequency string `json:"amount and frequency"`
	duration           string `json:"duration"`
	lastUsage          string `json:"last usage"`
	currentlyUsing     bool   `json:"currently using"`
}

type personalData struct {
	createdDate time.Time  `json:"creation date"`
	name        string     `json:"name"`
	birthdate   Date       `json:"birthdate"`
	age         uint8      `json:"age"`
	gender      GenderEnum `json:"gender"`

	modeOfReach           string `json:"mode of reach"`
	symptomsBrief         string `json:"symptoms brief"`
	prevPractitioners     string `json:"previous practitioners"`
	psychHospitalizations string `json:"psychiatric hospitalizations"`
	statusECT             bool   `json:"ECT"`
	statusPsychotherapy   bool   `json:"Psychotherapy"`
}

type currentMedications struct {
	drugAllergies []string   `json:"drug allergies"`
	medications   []drugInfo `json:"medications"`
}

type pastMedicalHistory struct {
	diabetes          bool   `json:"diabetes"`
	highBloodPressure bool   `json:"high blood pressure"`
	highCholesterol   bool   `json:"high cholesterol"`
	hypothyroidism    bool   `json:"hypothyroidism"`
	goiter            bool   `json:"goiter"`
	cancerType        string `json:"cancer type"`
	leukemia          bool   `json:"luekemia"`
	psoriasis         bool   `json:"psoriasis"`
	angina            bool   `json:"angina"`
	heartProblems     bool   `json:"heart problems"`

	heartMurmur       bool `json:"heart murmur"`
	pneumonia         bool `json:"pneumonia"`
	pulmonaryEmbolism bool `json:"pulmonary embolism"`
	asthma            bool `json:"asthma"`
	emphysema         bool `json:"emphysema"`
	stroke            bool `json:"stroke"`
	epilepsy          bool `json:"epilepsy"`
	cataracts         bool `json:"cataracts"`
	kidneyDisease     bool `json:"kidney disease"`
	kidneyStones      bool `json:"kidney stones"`

	crohnsDisease  bool `json:"crohns disease"`
	colitis        bool `json:"colitis"`
	anemia         bool `json:"anemia"`
	jaundice       bool `json:"jaundice"`
	hepatitis      bool `json:"hepatitis"`
	pepticUlcer    bool `json:"peptic ulcer"`
	rheumaticFever bool `json:"rheumatic fever"`
	tuberculosis   bool `json:"tuberculosis"`
	aids           bool `json:"aids"`
>>>>>>> 2f725db1d8ce935d5cc2b5eda1236e068e4bff87

	others []string `json:"others"`
}

type personalHistory struct {
<<<<<<< HEAD
	birthProblems string `json:"birth problems"`
	placeOfBirth string `json:"place of birth"`
	maritalStatus MarriageEnum `json:"marital status"`
	latestOccupation string `json:"latest occupation"`
	statusWorking bool `json:"currently working"`
	hoursPerWeek float32 `json:"hours per week"`
	statusSSI bool `json:"SSI status"`
	descSSI string `json:"SSI description"`
	legalProblems string `json:"legal problems"`
	religion string `json:"religion"`
}

type familyHistory struct {
	father familyMember `json:"father history"`
	mother familyMember `json:"mother history"`
	siblings []familyMember `json:"siblings history"`
	children []familyMember `json:"children history"`
	maternalRelativeIssues string `json:"maternal relative problems"`
	paternalRelativeIssues string `json:"maternal relative problems"`
}

type systemsReview struct {
	PreviousSymptoms previousSymptoms `json:"previous symptoms"`
=======
	birthProblems    string       `json:"birth problems"`
	placeOfBirth     string       `json:"place of birth"`
	maritalStatus    MarriageEnum `json:"marital status"`
	latestOccupation string       `json:"latest occupation"`
	statusWorking    bool         `json:"currently working"`
	hoursPerWeek     float32      `json:"hours per week"`
	statusSSI        bool         `json:"SSI status"`
	descSSI          string       `json:"SSI description"`
	legalProblems    string       `json:"legal problems"`
	religion         string       `json:"religion"`
}

type familyHistory struct {
	father                 familyMember   `json:"father history"`
	mother                 familyMember   `json:"mother history"`
	siblings               []familyMember `json:"siblings history"`
	children               []familyMember `json:"children history"`
	maternalRelativeIssues string         `json:"maternal relative problems"`
	paternalRelativeIssues string         `json:"maternal relative problems"`
}

type systemsReview struct {
	PreviousSymptoms          previousSymptoms          `json:"previous symptoms"`
>>>>>>> 2f725db1d8ce935d5cc2b5eda1236e068e4bff87
	WomensReproductiveHistory womensReproductiveHistory `json:"womens reproductive history"`
}

type substanceUse struct {
<<<<<<< HEAD
	alcohol substanceInfo `json:"alcohol"`
	cannabis substanceInfo `json:"cannabis"`
	stimulantsA substanceInfo `json:"stimulants A"`
	stimulantsB substanceInfo `json:"stimulants B"`
	amphetamines substanceInfo `json:"amphetamines"`
	tranquilizers substanceInfo `json:"tranquilizers"`
	sedatives substanceInfo `json:"sedatives"`
	heroin substanceInfo `json:"heroin"`
	illicitMethadone substanceInfo `json:"illicit methadone"`
	otherOpioids substanceInfo `json:"other opioids"`
	hallucinogens substanceInfo `json:"hallucinogens"`
	inhalants substanceInfo `json:"inhalants"`
	others []substanceInfo `json:"other substances"`
}


type EMR struct {
	PersonalData personalData `json:"personal"`
	CurrentMedications currentMedications `json:"current medications"`
	PastMedicalHistory pastMedicalHistory `json:"past medical history"`
	PersonalHistory personalHistory `json:"personal history"`
	FamilyHistory familyHistory `json:"family history"`
	SystemsReview systemsReview `json:"systems review"`
	SubstanceUse substanceUse `json:"substance use"`
}
=======
	alcohol          substanceInfo   `json:"alcohol"`
	cannabis         substanceInfo   `json:"cannabis"`
	stimulantsA      substanceInfo   `json:"stimulants A"`
	stimulantsB      substanceInfo   `json:"stimulants B"`
	amphetamines     substanceInfo   `json:"amphetamines"`
	tranquilizers    substanceInfo   `json:"tranquilizers"`
	sedatives        substanceInfo   `json:"sedatives"`
	heroin           substanceInfo   `json:"heroin"`
	illicitMethadone substanceInfo   `json:"illicit methadone"`
	otherOpioids     substanceInfo   `json:"other opioids"`
	hallucinogens    substanceInfo   `json:"hallucinogens"`
	inhalants        substanceInfo   `json:"inhalants"`
	others           []substanceInfo `json:"other substances"`
}

type EMR struct {
	PersonalData       personalData       `json:"personal"`
	CurrentMedications currentMedications `json:"current medications"`
	PastMedicalHistory pastMedicalHistory `json:"past medical history"`
	PersonalHistory    personalHistory    `json:"personal history"`
	FamilyHistory      familyHistory      `json:"family history"`
	SystemsReview      systemsReview      `json:"systems review"`
	SubstanceUse       substanceUse       `json:"substance use"`
}
>>>>>>> 2f725db1d8ce935d5cc2b5eda1236e068e4bff87
