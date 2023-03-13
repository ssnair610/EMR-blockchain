/*

Author : Pranav
Data of Creation : 11-03-2023
IDE : IntelliJ IDEA

*/


import {
    Button,
    Card,
    Container,
    Divider,
    Flex,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightElement,
    Link,
    Text,
    useColorModeValue,
    useToast,
    VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import {SyntheticEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";
import NavBar from "../Props-TypeScript/NavBar";
import {FaFacebook, FaGithub, FaGoogle} from "react-icons/all";
const DocLogin = () => {

    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50'),
        toast = useToast(),
        navigate = useNavigate(),
        [Email, setEmail] = useState(''),
        [Password, setPassword] = useState(''),
        [show, setShow] = React.useState(false),
        handleClick = () => setShow(!show);

    let Toast



    const submit = async (e: SyntheticEvent) => {

        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/docLogin', {
            body: JSON.stringify({
                    Email,
                    Password
                }
            ),
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            method: 'POST'
        });

        if (response.status === 202) {
            Toast = (toast({
                title: 'Successfully Logged In',
                status: 'success',
                duration: 5000,
                isClosable: true,
            }))

            return navigate("/docMainPage");

        } else if (response.status === 400) {
            Toast = (
                toast({
                    title: 'Error',
                    description: 'Email or Password is incorrect!',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            )


        }


    }


    return (
        <>
            <NavBar name={''}/>
            <Container maxW='container.xl'>
                <Flex>
                    <Container maxW='container.xl' centerContent py={55}>
                        <Flex>
                            <Card bg={bgColor} p={25}>
                                <Card p={3}>
                                    <VStack spacing={4}>
                                        <Heading mb={4}>Doc Login</Heading>
                                        <form onSubmit={submit}>
                                            <VStack w='full' h='full' spacing={4} px={2} alignItems='flex-start'>

                                                <InputGroup>
                                                    <InputLeftAddon children={'@'}/>
                                                    <Input type='email' focusBorderColor='red.300'
                                                           placeholder='Enter Email Address'
                                                           onChange={e => setEmail(e.target.value)}/>
                                                </InputGroup>
                                                <InputGroup size='md'>
                                                    <Input
                                                        pr='4.5rem'
                                                        type={show ? 'text' : 'password'}
                                                        placeholder="Enter your password"
                                                        focusBorderColor='red.300'
                                                        onChange={e => setPassword(e.target.value)}
                                                    />
                                                    <InputRightElement width='4.5rem'>
                                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                            {show ? 'Hide' : 'Show'}
                                                        </Button>
                                                    </InputRightElement>
                                                </InputGroup>
                                                {/*<PasswordInput placeHolder='Confirm your Password'/>*/}
                                                <Button size='md' w='full' colorScheme='brand'
                                                        type='submit'
                                                > Login
                                                </Button>
                                                <Link href='/docSignUp'><Text>Dont have a account , click here to sign up!!</Text></Link>
                                                <Divider/>
                                            </VStack>
                                        </form>
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
        </>
    );
};

export default DocLogin;