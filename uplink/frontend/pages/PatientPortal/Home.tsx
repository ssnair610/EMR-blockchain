// Home Page React Component

import {Card, Container, Divider, Heading, SlideFade, Text, useColorModeValue} from "@chakra-ui/react";
import * as React from "react";
import {useEffect, useState} from "react";
import NavBar from "../Props-TypeScript/NavBar";

export default function Home() {

    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50'),
        [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    }, [])


    return (
        <>

            <NavBar mode='patient' name={''}/>


            <Container maxW='container.xl' w='full'>

                <Card p={10} bg={bgColor} my={5}>

                    <SlideFade in={show} offsetX="-100px" transition={{enter: {duration: 0.8}}}>
                        <Card w='full' p={5}>

                            <Heading my={3}>Virtualica</Heading>
                            <Divider my={3}/>
                            <Text>
                                Welcome to our company! We are excited to offer you a cutting-edge solution for
                                storing
                                and sharing medical data securely and efficiently. We use blockchain technology to
                                ensure that your data is stored on a secure and tamper-proof network, providing you
                                with
                                the peace of mind that your information is protected from unauthorized access or
                                alteration. Our platform is designed to make it easy for you to access and share
                                your
                                medical records with healthcare providers, giving you greater control over your
                                healthcare journey. With our blockchain-based solution, you can rest assured that
                                your
                                data is stored in a way that is secure, transparent, and easily accessible when you
                                need
                                it.
                            </Text>

                        </Card>
                    </SlideFade>
                    <SlideFade in={show} offsetX="100px" transition={{enter: {duration: 0.8}}}>

                        <Card my={10} p={5} w='full'>

                            <Heading my={3}>Why should you trust us ?</Heading>
                            <Divider my={3}/>
                            <Text>

                                Storing medical data in a blockchain can offer several benefits. Firstly, it ensures
                                that
                                the data is secure and tamper-proof, as the information is distributed across a network
                                of
                                nodes, making it difficult for any one person or entity to manipulate the data.
                                Additionally, it allows patients to have greater control over their medical data, as
                                they
                                can grant access to healthcare providers and researchers on a case-by-case basis. This
                                can
                                lead to more personalized and effective medical treatment. Finally, by using blockchain
                                technology to store medical data, patients can have confidence that their data is being
                                stored and managed in a transparent and accountable manner, which can help build trust
                                between patients and healthcare providers.

                            </Text>

                        </Card>
                    </SlideFade>
                </Card>


            </Container>


        </>

    );
}

