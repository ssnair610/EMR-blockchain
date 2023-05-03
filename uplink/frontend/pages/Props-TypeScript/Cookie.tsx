import * as React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useToast} from "@chakra-ui/react";

const Cookie = (url: string) => {

    const navigate = useNavigate(),
        toast = useToast(),
        [name, getName] = useState(``),
        [gender, getGender] = useState(``),
        [age, getAge] = useState(``),
        [ID, getID] = useState(``),
        [modeOfReach, getModeOfReach] = useState(''),
        [symptomsBrief, getSymptomsBrief] = useState(''),
        [prevPractitioners, getPrevPractitioners] = useState(''),
        [psychHospitalizations, getPsychHospitalizations] = useState(''),
        [statusECT, getStatusECT] = useState(''),
        [statusPsychotherapy, getStatusPsychotherapy] = useState(''),
        [birthdate, getBirthdate] = useState(''),
        [email, getEmail] = useState('');


    useEffect(() => {
            (
                // @ts-ignore
                async () => {

                    const response = await fetch(url, {
                        credentials: 'include',
                        headers: {'Content-Type': 'application/json'},
                    });

                    const content = await response.json();


                    getName(content.Name)

                    getGender(content.Gender)
                    getAge(content.Age)
                    getID(content.ID)
                    getBirthdate(content.Birthdate)
                    getEmail(content.Email)
                    getStatusECT(content.StatusECT)
                    getStatusPsychotherapy(content.StatusPsychotherapy)
                    getPrevPractitioners(content.PrevPractitioners)
                    getPsychHospitalizations(content.PsychHospitalizations)
                    getSymptomsBrief(content.SymptomsBrief)
                    getModeOfReach(content.ModeOfReach)


                    if (ID === undefined) {
                        toast({
                            title: 'Not authorized',
                            description: 'You must be logged in',
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        })
                        navigate("/login");

                    }


                }
            )();
        },
        []);


    return {
        name: name,
        birthdate: birthdate,
        age: age,
        gender: gender,
        modeOfReach: modeOfReach,
        symptomsBrief: symptomsBrief,
        prevPractitioners: prevPractitioners,
        psychHospitalizations: psychHospitalizations,
        statusECT: statusECT,
        statusPsychotherapy: statusPsychotherapy,
        ID: ID,
        email: email,
    }


};

export default Cookie;