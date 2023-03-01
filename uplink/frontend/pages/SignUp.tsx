// Sign Up Page React Component

import {
    Button,
    Card,
    Container,
    Divider,
    Heading,
    HStack,
    Input,
    Link,
    Text,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import {FaFacebook, FaGithub, FaGoogle} from 'react-icons/all';
import EmailInput from "./Props-TypeScript/EmailInput";
import PasswordInput from './Props-TypeScript/PasswordInput';
import Footer from "./Props-TypeScript/Footer";
import NavBar from './Props-TypeScript/NavBar';

function ButtonCustom() {
    // Need to add isLoading when the button is pressed .
    return (<Button size='md' w='full' colorScheme='brand'>Login</Button>
    );
}


export default function Details() {

    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');


    return (
        <>
            <NavBar/>
            <Container centerContent py={35}>
                <Card bg={bgColor} p={25}>
                    <Card py={4}>

                        <VStack w='full' h='full' spacing={5} px={4} alignItems='flex-start'>
                            <Heading size='2xl'>Sign Up</Heading>
                            <Text>If you already have a account , then please click here to <Link>log in.</Link></Text>

                            <Input placeholder='Enter your Name'/>
                            <EmailInput/>
                            <PasswordInput placeHolder='Enter your Password'/>
                            <PasswordInput placeHolder='Confirm your Password'/>
                            <ButtonCustom/>
                            <Divider/>
                        </VStack>
                        <Container centerContent py={1}>
                            <VStack>
                                <Text>Or</Text>

                                <HStack>

                                    <Button colorScheme='facebook' leftIcon={<FaFacebook/>}>
                                        Facebook
                                    </Button>
                                    <Button color={'#4285F4'} leftIcon={<FaGoogle/>}>
                                        Google
                                    </Button>
                                    <Button color={'#6cc644'} leftIcon={<FaGithub/>}>
                                        Github
                                    </Button>
                                </HStack>
                            </VStack>

                        </Container>

                    </Card>
                </Card>
            </Container>
            <Footer/>
        </>
    );
}
