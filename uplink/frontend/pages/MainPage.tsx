import * as React from 'react';
import {useEffect, useState} from 'react';
import NavBar from "./Props-TypeScript/NavBar";
import {useNavigate} from "react-router-dom";
import {useToast} from "@chakra-ui/react";

const MainPage = () => {

    const [name, setName] = useState('');

    const navigate = useNavigate();
    const toast = useToast()


    function handleClick() {
        navigate("/login");
    }


    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:3000/api/user', {
                    credentials: 'include',
                    headers: {'Content-Type': 'application/json'},
                });

                const content = await response.json();
                setName(content.Name);

                if (name === undefined) {
                    toast({
                        title: 'Not authorized',
                        description: 'You must be logged in',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    })
                    handleClick();

                }
            }
        )();
    });

    return (
        <>
            <NavBar mode={name}/>

            <div>
                {name ? "Hi" + name : "You are not logged in !!"}
            </div>

        </>
    );
};

export default MainPage;