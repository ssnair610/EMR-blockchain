/*

Author : Pranav
Created on : 10-04-2023
IDE : GoLand

*/

import * as React from 'react';
import {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import NavBar from "../Props-TypeScript/NavBar";
import SideDrawer from "../Props-TypeScript/SideDrawer";
import Cookie from "../Props-TypeScript/Cookie";
import {
    Card,
    Center,
    Container,
    GridItem,
    Heading,
    Image,
    List,
    ListIcon,
    ListItem,
    SimpleGrid,
    Stack,
    Tab,
    Table,
    TableContainer,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    useToast
} from "@chakra-ui/react";
import {MdCheckCircle} from "react-icons/all";

interface DrugInfo {
    Name: string;
    Dose: string;
    Duration: string;
}

interface FamilyMember {
    Age: number;
    HealthAndPsychiatric: string;
    AgeAtDeath: number;
    Cause: string;
}

interface PreviousSymptoms {
    RecentWeightGain: string;
    Fatigue: boolean;
    Weakness: boolean;
    Fever: boolean;
    NightSweats: boolean;

    // Muscle/Joints/Bones
    Numbness: boolean;
    JointPain: boolean;
    MuscleWeakness: boolean;
    JointSwelling: string;

    // Ears
    RingingInTheEars: boolean;
    LossOfHearing: boolean;

    // Eye
    EyePain: boolean;
    EyeRedness: boolean;
    LossOfVision: boolean;
    BlurredVision: boolean;
    EyeDryness: boolean;

    // Throat
    FrequentSoreThroats: boolean;
    ThroatHoarseness: boolean;
    DifficultyInSwallowing: boolean;
    PainInJaw: boolean;

    // Heart and Lungs
    ChestPain: boolean;
    Palpitations: boolean;
    ShortnessOfBreath: boolean;
    Fainting: boolean;
    SwollenLegsOrFeet: boolean;
    Cough: boolean;

    // Nervous System
    Headaches: boolean;
    Dizziness: boolean;
    LossOfConsciousness: boolean;
    Tingling: boolean;
    MemoryLoss: boolean;

    // Stomach and intestines
    Nausea: boolean;
    Heartburn: boolean;
    StomachPain: boolean;
    Vomiting: boolean;
    YellowJaundice: boolean;
    IncreasingConstipation: boolean;
    PersistentDiarrhea: boolean;
    BloodInStools: boolean;
    BlackStools: boolean;

    // Skin
    SkinRedness: boolean;
    Rash: boolean;
    Bumps: boolean;
    HairLoss: boolean;
    ColorChanges: boolean;

    // Blood
    Anemia: boolean;
    Clots: boolean;

    // Kidney/Urine/Bladder
    FrequentUrination: boolean;
    BloodInUrine: boolean;

    // Women Only
    AbnormalPapSmear: boolean;
    IrregularPeriods: boolean;
    BleedingBetweenPeriods: boolean;
    Pms: boolean;

    // Psychiatric
    Depression: boolean;
    ExcessiveWorries: boolean;
    DifficultyFallingAsleep: boolean;
    DifficultyStayingAsleep: boolean;
    DifficultiesWithSexualArousal: boolean;
    PoorAppetite: boolean;
    FoodCravings: boolean;
    FrequentCrying: boolean;
    Sensitivity: boolean;
    SuicidalThoughts: boolean;
    Stress: boolean;
    Irritability: boolean;
    PoorConcentration: boolean;
    RacingThoughts: boolean;
    Hallucinations: boolean;
    RapidSpeech: boolean;
    GuiltyThoughts: boolean;
    Paranoia: boolean;
    MoodSwings: boolean;
    Anxiety: boolean;
    RiskyBehavior: boolean;

    OtherProblems: string;
}

interface WomensReproductiveHistory {
    AgeOfFirstPeriod: number;
    NumberOfPregancies: number;
    NumberOfMiscarriages: number;
    NumberOfAbortions: number;
    MenopauseAge: number;
    RegularPeriods: boolean;
}

interface SubstanceInfo {
    Category: string;
    AgeOfFirstUsed: number;
    AmountAndFrequency: string;
    Duration: string;
    LastUsage: string;
    CurrentlyUsing: boolean;
}


interface emrData {
    PersonalData: {
        CreatedDate: string;
        Name: string;
        Birthdate: {
            Year: number
            Month: number
            Day: number
        };
        Age: number;
        Gender: string;
        ModeOfReach: string;
        SymptomsBrief: string;
        PrevPractitioners: string;
        PsychHospitalizations: string;
        StatusECT: boolean;
        StatusPsychotherapy: boolean;


    },
    CurrentMedications: {
        DrugAllergies: string[]
        Medications: DrugInfo[]
    },
    PastMedicalHistory: {
        Diabetes: boolean;
        HighBloodPressure: boolean;
        HighCholesterol: boolean;
        Hypothyroidism: boolean;
        Goiter: boolean;
        CancerType: string;
        Leukemia: boolean;
        Psoriasis: boolean;
        Angina: boolean;
        HeartProblems: boolean;
        HeartMurmur: boolean;
        Pneumonia: boolean;
        PulmonaryEmbolism: boolean;
        Asthma: boolean;
        Emphysema: boolean;
        Stroke: boolean;
        Epilepsy: boolean;
        Cataracts: boolean;
        KidneyDisease: boolean;
        KidneyStones: boolean;
        CrohnsDisease: boolean;
        Colitis: boolean;
        Anemia: boolean;
        Jaundice: boolean;
        Hepatitis: boolean;
        PepticUlcer: boolean;
        RheumaticFever: boolean;
        Tuberculosis: boolean;
        Aids: boolean;
        Others: string[];
    },
    PersonalHistory: {
        BirthProblems: string;
        PlaceOfBirth: string;
        MaritalStatus: string;
        LatestOccupation: string;
        StatusWorking: boolean;
        HoursPerWeek: string;
        StatusSSI: boolean;
        DescSSI: string;
        LegalProblems: string
        Religion: string
    },
    FamilyHistory: {
        Father: FamilyMember;
        Mother: FamilyMember;
        Siblings: FamilyMember[];
        Children: FamilyMember[];
        MaternalRelativeIssues: string;
        PaternalRelativeIssues: string;
    },
    SystemsReview: {
        PreviousSymptoms: PreviousSymptoms;
        WomensReproductiveHistory: WomensReproductiveHistory;
    },
    SubstanceUse: {

        Alcohol: SubstanceInfo;
        Cannabis: SubstanceInfo;
        StimulantsA: SubstanceInfo;
        StimulantsB: SubstanceInfo;
        Amphetamines: SubstanceInfo;
        Tranquilizers: SubstanceInfo;
        Sedatives: SubstanceInfo;
        Heroin: SubstanceInfo;
        IllicitMethadone: SubstanceInfo;
        OtherOpioids: SubstanceInfo;
        Hallucinogens: SubstanceInfo;
        Inhalants: SubstanceInfo;
        Others: SubstanceInfo[];
    },
}


const DocPatientDetailsRead = () => {

    const url = 'http://localhost:3000/api/DocUser'
    let {name: name} = Cookie(url),
        Toast;
    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50'),
        toast = useToast(),
        [patientEmrData, setPatientEmrData] = useState<emrData>({
            "PersonalData": {
                "CreatedDate": "2022-03-31T10:15:30Z",
                "Name": "BAAAAM",
                "Birthdate": {
                    "Year": 1990,
                    "Month": 1,
                    "Day": 15
                },
                "Age": 30,
                "Gender": "Male",
                "ModeOfReach": "Referral",
                "SymptomsBrief": "Anxiety and depression",
                "PrevPractitioners": "Dr. Smith",
                "PsychHospitalizations": "None",
                "StatusECT": false,
                "StatusPsychotherapy": true
            },
            "CurrentMedications": {
                "DrugAllergies": [
                    "Penicillin",
                    "Aspirin",
                    "Ibuprofen"
                ],
                "Medications": [
                    {
                        "Name": "Lisinopril",
                        "Dose": "10mg",
                        "Duration": "1 week"
                    },
                    {
                        "Name": "Metformin",
                        "Dose": "500mg",
                        "Duration": "2 times daily"
                    },
                    {
                        "Name": "Atorvastatin",
                        "Dose": "20mg",
                        "Duration": "1 month"
                    }
                ]
            },
            "PastMedicalHistory": {
                "Diabetes": true,
                "HighBloodPressure": false,
                "HighCholesterol": true,
                "Hypothyroidism": false,
                "Goiter": false,
                "CancerType": "Breast",
                "Leukemia": true,
                "Psoriasis": false,
                "Angina": true,
                "HeartProblems": false,
                "HeartMurmur": true,
                "Pneumonia": false,
                "PulmonaryEmbolism": false,
                "Asthma": true,
                "Emphysema": false,
                "Stroke": true,
                "Epilepsy": false,
                "Cataracts": true,
                "KidneyDisease": false,
                "KidneyStones": true,
                "CrohnsDisease": false,
                "Colitis": true,
                "Anemia": false,
                "Jaundice": true,
                "Hepatitis": false,
                "PepticUlcer": true,
                "RheumaticFever": false,
                "Tuberculosis": true,
                "Aids": false,
                "Others": [
                    "Allergy",
                    "Migraine"
                ]
            },
            "PersonalHistory": {
                "BirthProblems": "Some Birth Problems",
                "PlaceOfBirth": "Some Place of Birth",
                "MaritalStatus": "Married",
                "LatestOccupation": "Software Engineer",
                "StatusWorking": true,
                "HoursPerWeek": "40",
                "StatusSSI": false,
                "DescSSI": "",
                "LegalProblems": "Some Legal Problems",
                "Religion": "Christianity"
            },
            "FamilyHistory": {
                "Father": {
                    "Age": 60,
                    "HealthAndPsychiatric": "No significant health or psychiatric issues",
                    "AgeAtDeath": 75,
                    "Cause": "Natural causes"
                },
                "Mother": {
                    "Age": 55,
                    "HealthAndPsychiatric": "Diagnosed with diabetes",
                    "AgeAtDeath": 65,
                    "Cause": "Heart attack"
                },
                "Siblings": [
                    {
                        "Age": 40,
                        "HealthAndPsychiatric": "No known health or psychiatric issues",
                        "AgeAtDeath": 0,
                        "Cause": ""
                    },
                    {
                        "Age": 35,
                        "HealthAndPsychiatric": "Diagnosed with hypertension",
                        "AgeAtDeath": 0,
                        "Cause": ""
                    }
                ],
                "Children": [
                    {
                        "Age": 30,
                        "HealthAndPsychiatric": "No significant health or psychiatric issues",
                        "AgeAtDeath": 0,
                        "Cause": ""
                    }
                ],
                "MaternalRelativeIssues": "Family history of breast cancer",
                "PaternalRelativeIssues": ""
            },
            "SystemsReview": {
                "PreviousSymptoms": {
                    "RecentWeightGain": "Yes",
                    "Fatigue": true,
                    "Weakness": false,
                    "Fever": true,
                    "NightSweats": false,
                    "Numbness": true,
                    "JointPain": false,
                    "MuscleWeakness": true,
                    "JointSwelling": "No",
                    "RingingInTheEars": false,
                    "LossOfHearing": true,
                    "EyePain": false,
                    "EyeRedness": true,
                    "LossOfVision": false,
                    "BlurredVision": true,
                    "EyeDryness": false,
                    "FrequentSoreThroats": true,
                    "ThroatHoarseness": false,
                    "DifficultyInSwallowing": true,
                    "PainInJaw": false,
                    "ChestPain": true,
                    "Palpitations": false,
                    "ShortnessOfBreath": true,
                    "Fainting": false,
                    "SwollenLegsOrFeet": true,
                    "Cough": false,
                    "Headaches": true,
                    "Dizziness": false,
                    "LossOfConsciousness": true,
                    "Tingling": false,
                    "MemoryLoss": true,
                    "Nausea": false,
                    "Heartburn": true,
                    "StomachPain": false,
                    "Vomiting": true,
                    "YellowJaundice": false,
                    "IncreasingConstipation": true,
                    "PersistentDiarrhea": false,
                    "BloodInStools": true,
                    "BlackStools": false,
                    "SkinRedness": true,
                    "Rash": false,
                    "Bumps": true,
                    "HairLoss": false,
                    "ColorChanges": true,
                    "Anemia": false,
                    "Clots": true,
                    "FrequentUrination": false,
                    "BloodInUrine": true,
                    "AbnormalPapSmear": false,
                    "IrregularPeriods": true,
                    "BleedingBetweenPeriods": false,
                    "Pms": true,
                    "Depression": false,
                    "ExcessiveWorries": true,
                    "DifficultyFallingAsleep": false,
                    "DifficultyStayingAsleep": true,
                    "DifficultiesWithSexualArousal": false,
                    "PoorAppetite": true,
                    "FoodCravings": false,
                    "FrequentCrying": true,
                    "Sensitivity": false,
                    "SuicidalThoughts": true,
                    "Stress": false,
                    "Irritability": true,
                    "PoorConcentration": false,
                    "RacingThoughts": true,
                    "Hallucinations": false,
                    "RapidSpeech": true,
                    "GuiltyThoughts": false,
                    "Paranoia": true,
                    "MoodSwings": false,
                    "Anxiety": true,
                    "RiskyBehavior": false,
                    "OtherProblems": "None"
                },
                "WomensReproductiveHistory": {
                    "AgeOfFirstPeriod": 12,
                    "NumberOfPregancies": 2,
                    "NumberOfMiscarriages": 1,
                    "NumberOfAbortions": 0,
                    "MenopauseAge": 45,
                    "RegularPeriods": true
                }
            },
            "SubstanceUse": {
                "Alcohol": {
                    "Category": "Alcohol",
                    "AgeOfFirstUsed": 16,
                    "AmountAndFrequency": "Moderate, 2-3 times a week",
                    "Duration": "2 years",
                    "LastUsage": "1 month ago",
                    "CurrentlyUsing": false
                },
                "Cannabis": {
                    "Category": "Cannabis",
                    "AgeOfFirstUsed": 18,
                    "AmountAndFrequency": "Occasional, once a month",
                    "Duration": "5 years",
                    "LastUsage": "2 weeks ago",
                    "CurrentlyUsing": true
                },
                "StimulantsA": {
                    "Category": "StimulantsA",
                    "AgeOfFirstUsed": 20,
                    "AmountAndFrequency": "High, daily",
                    "Duration": "1 year",
                    "LastUsage": "3 days ago",
                    "CurrentlyUsing": true
                },
                "StimulantsB": {
                    "Category": "StimulantsB",
                    "AgeOfFirstUsed": 22,
                    "AmountAndFrequency": "Low, weekly",
                    "Duration": "3 months",
                    "LastUsage": "1 week ago",
                    "CurrentlyUsing": false
                },
                "Amphetamines": {
                    "Category": "Amphetamines",
                    "AgeOfFirstUsed": 24,
                    "AmountAndFrequency": "None",
                    "Duration": "",
                    "LastUsage": "",
                    "CurrentlyUsing": false
                },
                "Tranquilizers": {
                    "Category": "Tranquilizers",
                    "AgeOfFirstUsed": 19,
                    "AmountAndFrequency": "Low, as needed",
                    "Duration": "2 years",
                    "LastUsage": "3 months ago",
                    "CurrentlyUsing": false
                },
                "Sedatives": {
                    "Category": "Sedatives",
                    "AgeOfFirstUsed": 25,
                    "AmountAndFrequency": "None",
                    "Duration": "",
                    "LastUsage": "",
                    "CurrentlyUsing": false
                },
                "Heroin": {
                    "Category": "Heroin",
                    "AgeOfFirstUsed": 28,
                    "AmountAndFrequency": "None",
                    "Duration": "",
                    "LastUsage": "",
                    "CurrentlyUsing": false
                },
                "IllicitMethadone": {
                    "Category": "IllicitMethadone",
                    "AgeOfFirstUsed": 26,
                    "AmountAndFrequency": "None",
                    "Duration": "",
                    "LastUsage": "",
                    "CurrentlyUsing": false
                },
                "OtherOpioids": {
                    "Category": "IllicitMethadone",
                    "AgeOfFirstUsed": 26,
                    "AmountAndFrequency": "None",
                    "Duration": "",
                    "LastUsage": "",
                    "CurrentlyUsing": false
                },
                "Hallucinogens": {
                    "Category": "OtherOpioids",
                    "AgeOfFirstUsed": 21,
                    "AmountAndFrequency": "Low, occasionally",
                    "Duration": "1 year",
                    "LastUsage": "3 months ago",
                    "CurrentlyUsing": false
                },
                "Inhalants": {
                    "Category": "Hallucinogens",
                    "AgeOfFirstUsed": 23,
                    "AmountAndFrequency": "None",
                    "Duration": "",
                    "LastUsage": "",
                    "CurrentlyUsing": false
                },
                "Others": [
                    {
                        "Category": "Inhalants",
                        "AgeOfFirstUsed": 30,
                        "AmountAndFrequency": "None",
                        "Duration": "",
                        "LastUsage": "",
                        "CurrentlyUsing": false
                    }
                ]
            }
        });

    // @ts-ignore
    const downloadData = async () => {

        const response = await fetch('http://localhost:3000/api/getPatientEmrData', {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
        });

        const content = await response.json();

        if (response.status === 400 || response.status === 401) {
            Toast = (
                toast({
                    title: 'Something went wrong',
                    description: 'Please try again later !!',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            )


        }

        setPatientEmrData(content)


    }

    useEffect(() => {
        // Call downloadData on component mount
        downloadData();
    }, []);


    let location = useLocation();
    let data = location.state;


    // @ts-ignore
    return (
        <>
            <NavBar mode='doc' name={name}/>
            <SideDrawer mode='doc'/>

            <Container maxW='container.xl' p={5}>

                {/*<Button onClick={downloadData}>Click Me</Button>*/}

                <Card bg={bgColor} p={10}>


                    <SimpleGrid columns={2} spacing={10}>

                        <GridItem colSpan={1}>


                            <Tabs>
                                <TabList>
                                    <Tab>Current Medications</Tab>
                                    <Tab>Medical History</Tab>
                                    <Tab>Personal History</Tab>
                                    <Tab>Family History</Tab>
                                    <Tab>Health Review</Tab>
                                    <Tab>Substance Use</Tab>
                                </TabList>

                                <TabPanels>

                                    {/*Current Medications*/}
                                    <TabPanel>

                                        <Tabs
                                            my={10}
                                            orientation="vertical"
                                            size="md"
                                            colorScheme="green"
                                        >

                                            <TabList>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Drug
                                                    Allergies</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Medications</Tab>
                                            </TabList>

                                            <TabPanels>

                                                {/*Drug Allergies*/}
                                                <TabPanel>

                                                    <List spacing={3}>

                                                        {patientEmrData.CurrentMedications.DrugAllergies.map((allergy) => (

                                                            <ListItem>
                                                                <ListIcon as={MdCheckCircle} color='green.500'/>
                                                                {allergy}
                                                            </ListItem>

                                                        ))}
                                                    </List>

                                                </TabPanel>

                                                {/*Medications*/}
                                                <TabPanel>


                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Drug</Th>
                                                                    <Th isNumeric>Dosage</Th>
                                                                    <Th isNumeric>Duration</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>
                                                                {/* Render initial table rows */}
                                                                {patientEmrData.CurrentMedications.Medications.map((row, index) => (
                                                                    <Tr key={index}>
                                                                        <Td>{row.Name}</Td>
                                                                        <Td>{row.Dose}</Td>
                                                                        <Td>{row.Duration}</Td>
                                                                        {/* Render more table data columns as needed */}
                                                                    </Tr>
                                                                ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Drug</Th>
                                                                    <Th isNumeric>Dosage</Th>
                                                                    <Th isNumeric>Duration</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>


                                                </TabPanel>
                                            </TabPanels>

                                        </Tabs>


                                    </TabPanel>

                                    {/*Medical History*/}
                                    <TabPanel>


                                        <TableContainer>
                                            <Table size='sm'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Symptom Name</Th>
                                                        <Th>Status/Location</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    {/* Render initial table rows */}
                                                    {/*@ts-ignore*/}
                                                    {Object.entries(patientEmrData.PastMedicalHistory).map(([key, value]) => (

                                                        <Tr key={key}
                                                            style={{backgroundColor: typeof value === 'boolean' ? (value ? 'teal' : '') : ''}}>
                                                            <Td>{key}</Td>
                                                            <Td>{typeof value === 'boolean' ? (value ? 'True' : 'False') : value}</Td>
                                                        </Tr>

                                                    ))}
                                                </Tbody>
                                                <Tfoot>
                                                    <Tr>
                                                        <Th>Symptom Name</Th>
                                                        <Th>Status/Location</Th>
                                                    </Tr>
                                                </Tfoot>
                                            </Table>
                                        </TableContainer>

                                    </TabPanel>

                                    {/*Personal History*/}
                                    <TabPanel>

                                        <TableContainer>
                                            <Table size='sm'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Parameter</Th>
                                                        <Th>Value</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    {/* Render initial table rows */}
                                                    {/*@ts-ignore*/}
                                                    {Object.entries(patientEmrData.PersonalHistory).map(([key, value]) => (

                                                        <Tr key={key}
                                                            style={{backgroundColor: typeof value === 'boolean' ? (value ? 'teal' : '') : ''}}>
                                                            <Td>{key}</Td>
                                                            <Td>{typeof value === 'boolean' ? (value ? 'True' : 'False') : value}</Td>
                                                        </Tr>

                                                    ))}
                                                </Tbody>
                                                <Tfoot>
                                                    <Tr>
                                                        <Th>Parameter</Th>
                                                        <Th>Value</Th>
                                                    </Tr>
                                                </Tfoot>
                                            </Table>
                                        </TableContainer>


                                    </TabPanel>

                                    {/*Family History*/}
                                    <TabPanel>

                                        <Tabs
                                            orientation="vertical"
                                            size="md"
                                            colorScheme="green"
                                        >

                                            <TabList>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Father</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Mother</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Siblings</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Children</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Maternal Relative
                                                    Issues</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Paternal Relative
                                                    Issues</Tab>
                                            </TabList>
                                            <TabPanels>

                                                {/*Father*/}
                                                <TabPanel>

                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>
                                                                {/* Render initial table rows */}
                                                                {/*@ts-ignore*/}
                                                                {Object.entries(patientEmrData.FamilyHistory.Father).map(([key, value]) => (

                                                                    <Tr key={key}
                                                                        style={{backgroundColor: typeof value === 'string' ? (value ? 'teal' : '') : ''}}>
                                                                        <Td>{key}</Td>
                                                                        <Td>{value}</Td>
                                                                    </Tr>

                                                                ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>

                                                </TabPanel>

                                                {/*Mother*/}
                                                <TabPanel>

                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>
                                                                {/* Render initial table rows */}
                                                                {/*@ts-ignore*/}
                                                                {Object.entries(patientEmrData.FamilyHistory.Mother).map(([key, value]) => (

                                                                    <Tr key={key}
                                                                        style={{backgroundColor: typeof value === 'string' ? (value ? 'teal' : '') : ''}}>
                                                                        <Td>{key}</Td>
                                                                        <Td>{value}</Td>
                                                                    </Tr>

                                                                ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>
                                                </TabPanel>

                                                {/*Siblings*/}
                                                <TabPanel>


                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Age</Th>
                                                                    <Th>Health Problems ?</Th>
                                                                    <Th isNumeric>Age of Death</Th>
                                                                    <Th>Cause of Death</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>
                                                                <Tr>

                                                                    {patientEmrData.FamilyHistory.Siblings.map((row, index) => (
                                                                        <Tr key={index}>
                                                                            <Td>{row.Age}</Td>
                                                                            <Td>{row.HealthAndPsychiatric}</Td>
                                                                            <Td>{row.AgeAtDeath}</Td>
                                                                            <Td>{row.Cause}</Td>
                                                                        </Tr>
                                                                    ))}

                                                                </Tr>

                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Age</Th>
                                                                    <Th>Health Problems ?</Th>
                                                                    <Th isNumeric>Age of Death</Th>
                                                                    <Th>Cause of Death</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>


                                                </TabPanel>

                                                {/*Children*/}
                                                <TabPanel>
                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Age</Th>
                                                                    <Th>Health Problems ?</Th>
                                                                    <Th isNumeric>Age of Death</Th>
                                                                    <Th>Cause of Death</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>

                                                                {patientEmrData.FamilyHistory.Children.map((row, index) => (
                                                                    <Tr key={index}>
                                                                        <Td>{row.Age}</Td>
                                                                        <Td>{row.HealthAndPsychiatric}</Td>
                                                                        <Td>{row.AgeAtDeath}</Td>
                                                                        <Td>{row.Cause}</Td>
                                                                    </Tr>
                                                                ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Age</Th>
                                                                    <Th>Health Problems ?</Th>
                                                                    <Th isNumeric>Age of Death</Th>
                                                                    <Th>Cause of Death</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>
                                                </TabPanel>

                                                {/*Maternal Relative Issues*/}
                                                <TabPanel>
                                                    <List spacing={3}>
                                                        <ListItem>
                                                            <ListIcon as={MdCheckCircle} color='green.500'/>
                                                            {patientEmrData.FamilyHistory.MaternalRelativeIssues}
                                                        </ListItem>

                                                    </List>
                                                </TabPanel>

                                                {/*Paternal Relative Issues*/}
                                                <TabPanel>
                                                    <List spacing={3}>
                                                        <ListItem>
                                                            <ListIcon as={MdCheckCircle} color='green.500'/>
                                                            {patientEmrData.FamilyHistory.PaternalRelativeIssues}

                                                        </ListItem>
                                                    </List>
                                                </TabPanel>


                                            </TabPanels>

                                        </Tabs>

                                    </TabPanel>

                                    {/*Health Review*/}
                                    <TabPanel>


                                        <TableContainer>
                                            <Table size='sm'>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Health Parameter</Th>
                                                        <Th>Value</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>

                                                    {/* Render initial table rows */}
                                                    {/*@ts-ignore*/}
                                                    {Object.entries(patientEmrData.SystemsReview.PreviousSymptoms).map(([key, value]) => (

                                                        <Tr key={key}
                                                            style={{backgroundColor: typeof value === 'boolean' ? (value ? 'teal' : '') : ''}}>
                                                            <Td>{key}</Td>
                                                            <Td>{typeof value === 'boolean' ? (value ? 'True' : 'False') : value}</Td>
                                                        </Tr>

                                                    ))}
                                                </Tbody>
                                                <Tfoot>
                                                    <Tr>
                                                        <Th>Health Parameter</Th>
                                                        <Th>Value</Th>
                                                    </Tr>
                                                </Tfoot>
                                            </Table>
                                        </TableContainer>

                                    </TabPanel>

                                    {/*Substance Use*/}
                                    <TabPanel>


                                        <Tabs
                                            orientation="vertical"
                                            size="md"
                                            colorScheme="green"
                                        >

                                            <TabList>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Alcohol</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Cannabis</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Stimulants A</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Stimulants B</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Amphetamines</Tab>
                                                <Tab _focus={{outline: "none"}}
                                                     fontWeight="semibold">Tranquilizers</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Sedatives</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Heroin</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Illicit
                                                    Methadone</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Other
                                                    Opioids</Tab>
                                                <Tab _focus={{outline: "none"}}
                                                     fontWeight="semibold">Hallucinogens</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Inhalants</Tab>
                                                <Tab _focus={{outline: "none"}} fontWeight="semibold">Other</Tab>
                                            </TabList>
                                            <TabPanels>

                                                {/*Alcohol*/}
                                                <TabPanel>
                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>

                                                                {/* Render initial table rows */}
                                                                {/*@ts-ignore*/}
                                                                {Object.entries(patientEmrData.SubstanceUse.Alcohol).map(([key, value]) => (

                                                                    <Tr key={key}
                                                                        style={{backgroundColor: typeof value === 'boolean' ? (value ? 'teal' : '') : ''}}>
                                                                        <Td>{key}</Td>
                                                                        <Td>{typeof value === 'boolean' ? (value ? 'True' : 'False') : value}</Td>
                                                                    </Tr>

                                                                ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>


                                                </TabPanel>

                                                {/*Cannabis*/}
                                                <TabPanel>
                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>

                                                                {/* Render initial table rows */}
                                                                {/*@ts-ignore*/}
                                                                {Object.entries(patientEmrData.SubstanceUse.Cannabis).map(([key, value]) => (

                                                                    <Tr key={key}
                                                                        style={{backgroundColor: typeof value === 'boolean' ? (value ? 'teal' : '') : ''}}>
                                                                        <Td>{key}</Td>
                                                                        <Td>{typeof value === 'boolean' ? (value ? 'True' : 'False') : value}</Td>
                                                                    </Tr>

                                                                ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>

                                                </TabPanel>

                                                {/*Stimulants A*/}
                                                <TabPanel>

                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>

                                                                {/* Render initial table rows */}
                                                                {/*@ts-ignore*/}
                                                                {Object.entries(patientEmrData.SubstanceUse.StimulantsA).map(([key, value]) => (

                                                                    <Tr key={key}
                                                                        style={{backgroundColor: typeof value === 'boolean' ? (value ? 'teal' : '') : ''}}>
                                                                        <Td>{key}</Td>
                                                                        <Td>{typeof value === 'boolean' ? (value ? 'True' : 'False') : value}</Td>
                                                                    </Tr>

                                                                ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>

                                                </TabPanel>

                                                {/*Stimulants B*/}
                                                <TabPanel>
                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>

                                                                {/* Render initial table rows */}
                                                                {/*@ts-ignore*/}
                                                                {Object.entries(patientEmrData.SubstanceUse.StimulantsB).map(([key, value]) => (

                                                                    <Tr key={key}
                                                                        style={{backgroundColor: typeof value === 'boolean' ? (value ? 'teal' : '') : ''}}>
                                                                        <Td>{key}</Td>
                                                                        <Td>{typeof value === 'boolean' ? (value ? 'True' : 'False') : value}</Td>
                                                                    </Tr>

                                                                ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>

                                                </TabPanel>

                                                {/*Amphetamines*/}
                                                <TabPanel>
                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>

                                                                {/* Render initial table rows */}
                                                                {/*@ts-ignore*/}
                                                                {Object.entries(patientEmrData.SubstanceUse.Amphetamines).map(([key, value]) => (

                                                                    <Tr key={key}
                                                                        style={{backgroundColor: typeof value === 'boolean' ? (value ? 'teal' : '') : ''}}>
                                                                        <Td>{key}</Td>
                                                                        <Td>{typeof value === 'boolean' ? (value ? 'True' : 'False') : value}</Td>
                                                                    </Tr>

                                                                ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>

                                                </TabPanel>

                                                {/*Tranquilizers*/}
                                                <TabPanel>
                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>

                                                                {/* Render initial table rows */}
                                                                {/*@ts-ignore*/}
                                                                {Object.entries(patientEmrData.SubstanceUse.Tranquilizers).map(([key, value]) => (

                                                                    <Tr key={key}
                                                                        style={{backgroundColor: typeof value === 'boolean' ? (value ? 'teal' : '') : ''}}>
                                                                        <Td>{key}</Td>
                                                                        <Td>{typeof value === 'boolean' ? (value ? 'True' : 'False') : value}</Td>
                                                                    </Tr>

                                                                ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>

                                                </TabPanel>

                                                {/*Sedatives*/}
                                                <TabPanel>
                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>

                                                                {/* Render initial table rows */}
                                                                {/*@ts-ignore*/}
                                                                {Object.entries(patientEmrData.SubstanceUse.Sedatives).map(([key, value]) => (

                                                                    <Tr key={key}
                                                                        style={{backgroundColor: typeof value === 'boolean' ? (value ? 'teal' : '') : ''}}>
                                                                        <Td>{key}</Td>
                                                                        <Td>{typeof value === 'boolean' ? (value ? 'True' : 'False') : value}</Td>
                                                                    </Tr>

                                                                ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>

                                                </TabPanel>

                                                {/*Heroin*/}
                                                <TabPanel>
                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>

                                                                {/* Render initial table rows */}
                                                                {/*@ts-ignore*/}
                                                                {Object.entries(patientEmrData.SubstanceUse.Heroin).map(([key, value]) => (

                                                                    <Tr key={key}
                                                                        style={{backgroundColor: typeof value === 'boolean' ? (value ? 'teal' : '') : ''}}>
                                                                        <Td>{key}</Td>
                                                                        <Td>{typeof value === 'boolean' ? (value ? 'True' : 'False') : value}</Td>
                                                                    </Tr>

                                                                ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>

                                                </TabPanel>

                                                {/*IllicitMethadone*/}
                                                <TabPanel>
                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>

                                                                {/* Render initial table rows */}
                                                                {/*@ts-ignore*/}
                                                                {Object.entries(patientEmrData.SubstanceUse.IllicitMethadone).map(([key, value]) => (

                                                                    <Tr key={key}
                                                                        style={{backgroundColor: typeof value === 'boolean' ? (value ? 'teal' : '') : ''}}>
                                                                        <Td>{key}</Td>
                                                                        <Td>{typeof value === 'boolean' ? (value ? 'True' : 'False') : value}</Td>
                                                                    </Tr>

                                                                ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>

                                                </TabPanel>

                                                {/*OtherOpioids*/}
                                                <TabPanel>

                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>

                                                                {/* Render initial table rows */}
                                                                {/*@ts-ignore*/}
                                                                {Object.entries(patientEmrData.SubstanceUse.OtherOpioids).map(([key, value]) => (

                                                                    <Tr key={key}
                                                                        style={{backgroundColor: typeof value === 'boolean' ? (value ? 'teal' : '') : ''}}>
                                                                        <Td>{key}</Td>
                                                                        <Td>{typeof value === 'boolean' ? (value ? 'True' : 'False') : value}</Td>
                                                                    </Tr>

                                                                ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>
                                                </TabPanel>

                                                {/*Hallucinogens*/}
                                                <TabPanel>
                                                    <TableContainer>
                                                        <Table size='sm'>
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>

                                                                {/* Render initial table rows */}
                                                                {/*@ts-ignore*/}
                                                                {Object.entries(patientEmrData.SubstanceUse.Hallucinogens).map(([key, value]) => (

                                                                    <Tr key={key}
                                                                        style={{backgroundColor: typeof value === 'boolean' ? (value ? 'teal' : '') : ''}}>
                                                                        <Td>{key}</Td>
                                                                        <Td>{typeof value === 'boolean' ? (value ? 'True' : 'False') : value}</Td>
                                                                    </Tr>

                                                                ))}
                                                            </Tbody>
                                                            <Tfoot>
                                                                <Tr>
                                                                    <Th>Health Parameter</Th>
                                                                    <Th>Value</Th>
                                                                </Tr>
                                                            </Tfoot>
                                                        </Table>
                                                    </TableContainer>

                                                </TabPanel>

                                                {/*Inhalants*/}
                                                <TabPanel>

                                                    {/*<p>{patientEmrData.SubstanceUse.Inhalants}</p>*/}

                                                    {/*<TableContainer>*/}
                                                    {/*    <Table size='sm'>*/}
                                                    {/*        <Thead>*/}
                                                    {/*            <Tr>*/}
                                                    {/*                <Th>Health Parameter</Th>*/}
                                                    {/*                <Th>Value</Th>*/}
                                                    {/*            </Tr>*/}
                                                    {/*        </Thead>*/}
                                                    {/*        <Tbody>*/}

                                                    {/*            /!* Render initial table rows *!/*/}
                                                    {/*            /!*@ts-ignore*!/*/}
                                                    {/*            {Object.entries(patientEmrData.SubstanceUse.Inhalants).map(([key, value]) => (*/}

                                                    {/*                <Tr key={key}*/}
                                                    {/*                    style={{backgroundColor: typeof value === 'boolean' ? (value ? 'teal' : '') : ''}}>*/}
                                                    {/*                    <Td>{key}</Td>*/}
                                                    {/*                    <Td>{typeof value === 'boolean' ? (value ? 'True' : 'False') : value}</Td>*/}
                                                    {/*                </Tr>*/}

                                                    {/*            ))}*/}
                                                    {/*        </Tbody>*/}
                                                    {/*        <Tfoot>*/}
                                                    {/*            <Tr>*/}
                                                    {/*                <Th>Health Parameter</Th>*/}
                                                    {/*                <Th>Value</Th>*/}
                                                    {/*            </Tr>*/}
                                                    {/*        </Tfoot>*/}
                                                    {/*    </Table>*/}
                                                    {/*</TableContainer>*/}
                                                </TabPanel>


                                                {/*/!*Other*!/*/}
                                                {/*<TabPanel>*/}

                                                {/*    <TableContainer>*/}
                                                {/*        <Table size='sm'>*/}
                                                {/*            <Thead>*/}
                                                {/*                <Tr>*/}
                                                {/*                    <Th>Category</Th>*/}
                                                {/*                    <Th isNumeric>Age Of FirstUsed</Th>*/}
                                                {/*                    <Th isNumeric>Amount And Frequency</Th>*/}
                                                {/*                    <Th isNumeric>Duration</Th>*/}
                                                {/*                    <Th isNumeric>LastUsage</Th>*/}
                                                {/*                    <Th>Currently Using</Th>*/}

                                                {/*                </Tr>*/}
                                                {/*            </Thead>*/}
                                                {/*            <Tbody>*/}
                                                {/*                /!* Render initial table rows *!/*/}
                                                {/*                {patientEmrData.SubstanceUse.Others.map((row, index) => (*/}
                                                {/*                    <Tr key={index}>*/}
                                                {/*                        <Td>{row.Category}</Td>*/}
                                                {/*                        <Td>{row.AgeOfFirstUsed}</Td>*/}
                                                {/*                        <Td>{row.AmountAndFrequency}</Td>*/}
                                                {/*                        <Td>{row.Duration}</Td>*/}
                                                {/*                        <Td>{row.LastUsage}</Td>*/}
                                                {/*                        <Td>{row.CurrentlyUsing}</Td>*/}
                                                {/*                        /!* Render more table data columns as needed *!/*/}
                                                {/*                    </Tr>*/}
                                                {/*                ))}*/}
                                                {/*            </Tbody>*/}
                                                {/*            <Tfoot>*/}
                                                {/*                <Tr>*/}
                                                {/*                    <Th>Category</Th>*/}
                                                {/*                    <Th isNumeric>Age Of FirstUsed</Th>*/}
                                                {/*                    <Th isNumeric>Amount And Frequency</Th>*/}
                                                {/*                    <Th isNumeric>Duration</Th>*/}
                                                {/*                    <Th isNumeric>LastUsage</Th>*/}
                                                {/*                    <Th>Currently Using</Th>*/}
                                                {/*                </Tr>*/}
                                                {/*            </Tfoot>*/}
                                                {/*        </Table>*/}
                                                {/*    </TableContainer>*/}


                                                {/*</TabPanel>*/}


                                            </TabPanels>

                                        </Tabs>


                                    </TabPanel>


                                </TabPanels>
                            </Tabs>


                        </GridItem>

                        <GridItem p={10} colSpan={1}>

                            <Center>
                                <Container mx={90}>
                                    <Image
                                        src='https://i.redd.it/iaopf8o4dws41.jpg'
                                        alt='Green double couch with wooden legs'
                                        borderRadius='sm'
                                        htmlHeight={250} htmlWidth={250}
                                    />


                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>William Joesph Blazkowicz</Heading>
                                    </Stack>
                                </Container>
                            </Center>


                        </GridItem>

                    </SimpleGrid>


                </Card>
            </Container>

        </>
    )
        ;
};

export default DocPatientDetailsRead;