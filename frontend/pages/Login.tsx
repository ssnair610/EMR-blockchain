// Login Page React Component

import {
    Button,
    Card,
    Container,
    Divider,
    Flex,
    Heading,
    HStack,
    Text,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import {FaFacebook, FaGithub, FaGoogle} from 'react-icons/all';

import EmailInput from "./Props-TypeScript/EmailInput";
import PasswordInput from './Props-TypeScript/PasswordInput';
import NavBar from './Props-TypeScript/NavBar';
import Footer from "./Props-TypeScript/Footer";

function ButtonCustom() {
    // Need to add isLoading when the button is pressed .
    return (<Button size='md' w='full' colorScheme='brand'>Login</Button>
    );
}


export default function Login() {
    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
    return (
        <>
            <NavBar/>
            <Container maxW='container.xl'>
                <Flex>
                    <Container maxW='container.xl' centerContent py={55}>
                        <Flex>
                            <Card bg={bgColor} p={25}>
                                <Card p={3}>
                                    <VStack spacing={4}>
                                        <Heading mb={4}>Login</Heading>

                                        <EmailInput/>
                                        <PasswordInput placeHolder='Enter your Password'/>
                                        <ButtonCustom/>
                                        <Divider/>
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
                                </Card>
                            </Card>

                        </Flex>
                    </Container>
                </Flex>
            </Container>
            <Footer/>
        </>
    );

}

