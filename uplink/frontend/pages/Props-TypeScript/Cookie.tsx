import * as React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useToast} from "@chakra-ui/react";

const Cookie = (url: string) => {

    const navigate = useNavigate(),
        toast = useToast(),
        [name, getName] = useState(``),
        [email, getEmail] = useState(''),
        [address, getAddress] = useState(''),
        [phoneNumber, getPhoneNumber] = useState(''),
        [doctorsName, getDoctorsName] = useState(''),
        [medication, getMedication] = useState(''),
        [ailments, getAilments] = useState(''),
        [patientStatus, getPatientStatus] = useState(''),
        [gender, getGender] = useState(``),
        [age, getAge] = useState(``);


    useEffect(() => {
            (
                async () => {


                    const response = await fetch(url, {
                        credentials: 'include',
                        headers: {'Content-Type': 'application/json'},
                    });

                    const content = await response.json();


                    getName(content.Name)
                    getEmail(content.Email)
                    getPhoneNumber(content.PhoneNumber)
                    getDoctorsName(content.DoctorsName)
                    getAddress(content.Address);
                    getMedication(content.Medication)
                    getAilments(content.Ailments)
                    getPatientStatus(content.PatientStatus)
                    getGender(content.Gender)
                    getAge(content.Age)


                    if (content.ID === undefined) {
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
        email: email,
        address: address,
        phoneNumber: phoneNumber,
        doctorsName: doctorsName,
        medication: medication,
        ailments: ailments,
        patientStatus: patientStatus,
        gender: gender,
        age: age,
    }


};

export default Cookie;