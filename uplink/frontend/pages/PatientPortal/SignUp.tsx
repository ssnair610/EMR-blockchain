// Sign Up Page React Component
import {
    Button,
    Card,
    Container,
    Divider,
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
    VStack
} from '@chakra-ui/react';
import * as React from 'react';
import {SyntheticEvent, useState} from 'react';
import NavBar from '../Props-TypeScript/NavBar';
import {FaFacebook, FaGithub, FaGoogle} from "react-icons/all";
import {useNavigate} from "react-router-dom";

export default function Details() {

    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [show, setShow] = React.useState(false);
    const navigate = useNavigate();
    const toast = useToast()

    const handleClick = () => setShow(!show);

    let Toast;


    const submit = async (e: SyntheticEvent) => {


        e.preventDefault();
        if (Name !== '' || Email !== '' || Password !== '') {
            const response = await fetch('http://localhost:3000/api/regeister', {
                body: JSON.stringify({
                        Name,
                        Email,
                        Password
                    }
                ),
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
            });

            if (response.status === 201) {
                Toast = (toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                }))

                return navigate("/login");

            } else if (response.status === 500) {
                Toast = (
                    toast({
                        title: 'Internal Server Error',
                        description: 'Please try again!',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    })
                )
            }
        } else {
            Toast = (
                toast({
                    title: 'Error - Incomplete Data',
                    description: 'Please fill all the data!',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            )
        }
    }


    return (
        <>
            <NavBar mode='patient' name={''}/>

            <Container centerContent py={35}>
                <Card bg={bgColor} p={25}>
                    <Card py={4}>
                        <form onSubmit={submit}>

                            <VStack w='full' h='full' spacing={5} px={4} alignItems='flex-start'>
                                <Heading size='2xl'>Sign Up</Heading>
                                <Text>If you already have a account , then please click here to <Link>log
                                    in.</Link></Text>

                                <Input placeholder='Enter your Name'
                                       onChange={e => setName(e.target.value)}/>
                                <InputGroup>
                                    <InputLeftAddon children={'@'}/>
                                    <Input type='email' focusBorderColor='red.300'
                                           placeholder='Enter Email Address' onChange={e => setEmail(e.target.value)}/>
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
                                <Button size='md' w='full' colorScheme='brand' type='submit'>Sign Up!!</Button>
                                <Divider/>
                            </VStack>
                        </form>

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


        </>
    );
}
