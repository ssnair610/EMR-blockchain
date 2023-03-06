import *as React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useToast} from "@chakra-ui/react";

const Cookie = (url: string) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const toast = useToast()


    useEffect(() => {
        (
            async () => {
                const response = await fetch(url, {
                    credentials: 'include',
                    headers: {'Content-Type': 'application/json'},
                });

                const content = await response.json();
                setName(content.Name);
                setEmail(content.Email);

                if (name === undefined) {
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
    });

    return {
        name,
        email
    }


};

export default Cookie;