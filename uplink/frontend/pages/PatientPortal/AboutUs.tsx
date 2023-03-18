/*

Author : kphkp
Created on : 16-03-2023
IDE : GoLand

*/

import {Avatar, Card, Container, Divider, Heading, Link, SlideFade, Stack, Text, useColorModeValue} from '@chakra-ui/react';
import * as React from 'react';
import {useEffect, useState} from 'react';
import NavBar from "../Props-TypeScript/NavBar";

const AboutUs = () => {
    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50'),
        [show, showSet] = useState(false);

    useEffect(() => {
        showSet(true);
    }, [])


    return (
        <>
            <NavBar mode='patient' name={''}/>


            <Container maxW='container.xl' w='full'>

                <Card p={10} bg={bgColor} my={5}>

                    <SlideFade in={show} offsetX="-100px" transition={{enter: {duration: 0.8}}}>
                        <Card w='full' p={5}>
                            <Heading>About Us</Heading>
                            <Divider my={5}/>
                            <Text>Welcome to our team page! We are a group of passionate students who are working on an
                                exciting project
                                that involves blockchain technology to securely store medical data. Our team is
                                proficient in using Go
                                and React, and we are constantly learning and exploring new ways to improve our skills
                                and knowledge.

                                Our goal is to create a platform that enables patients and healthcare providers to store
                                and share
                                medical data in a secure and transparent manner. We believe that blockchain technology
                                has the potential
                                to revolutionize the healthcare industry by providing a decentralized, immutable, and
                                tamper-proof
                                system to store sensitive medical information.

                                We are committed to building a user-friendly and efficient platform that meets the needs
                                of both
                                patients and healthcare providers. Our team values collaboration, innovation, and
                                continuous learning,
                                and we strive to make a positive impact in the healthcare industry through our project.

                                Thank you for visiting our page, and we look forward to sharing more updates about our
                                project with
                                you!</Text>

                            <Container centerContent>
                                <Stack my={10} spacing='5' direction='row'>
                                    <Link href='https://github.com/Pranav-coder88'
                                          style={{textDecoration: 'none'}}>
                                        <Avatar size='xl'
                                                src='https://avatars.githubusercontent.com/u/62785685?s=96&v=4'/>
                                    </Link>
                                    <Link href='https://github.com/SassyQuatch47' style={{textDecoration: 'none'}}>
                                        <Avatar size='xl' src='https://avatars.githubusercontent.com/u/55615242?v=4'/>
                                    </Link>
                                    <Link href='https://github.com/ssnair610' style={{textDecoration: 'none'}}>
                                        <Avatar size='xl' src='https://avatars.githubusercontent.com/u/60660453?v=4'/>
                                    </Link>
                                </Stack>
                            </Container>

                        </Card>
                    </SlideFade>
                </Card>


            </Container>
        </>
    );
};

export default AboutUs;