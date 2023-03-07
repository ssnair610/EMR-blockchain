import {
    Avatar,
    Box,
    Button,
    Card,
    Container,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    GridItem,
    Heading,
    Input,
    Select,
    SimpleGrid,
    Text,
    useColorModeValue,
    useToast,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import *as React from 'react';
import {SyntheticEvent, useState} from 'react';
import NavBar from "./Props-TypeScript/NavBar"
import Cookie from "./Props-TypeScript/Cookie";

export default function UserProfile() {

    const url = 'http://localhost:3000/api/getUserDetails'
    let {
        name,
        email,
        address,
        phoneNumber,
        doctorsName,
        medication,
        ailments,
        patientStatus,
        gender,
        age

    } = Cookie(url);

    const [Name, setName] = useState(name),
        [Address, setAddress] = useState(address),
        [PhoneNumber, setPhoneNumber] = useState(phoneNumber),
        [DoctorsName, setDoctorsName] = useState(doctorsName),
        [Medication, setMedication] = useState(medication),
        [Ailments, setAilments] = useState(ailments),
        [PatientStatus, setPatientStatus] = useState(''),
        [Gender, setGender] = useState(gender),
        [Age, setAge] = useState(age),
        toast = useToast();


    let Toast

    let [inputDisabled, isInputDisabled] = useState(true);
    let [buttonData, setButtonData] = useState('Update details');
    const bgColor = useColorModeValue('gray.200', 'gray.700');


    const updateDetails = () => {

        if (inputDisabled === true) {
            isInputDisabled(false);
            setButtonData('Submit');
        } else {
            isInputDisabled(true);
            setButtonData('Update details');
        }
    }
    const submit = async (e: SyntheticEvent) => {

        console.log("submit is called")
        e.preventDefault();


        if (inputDisabled === true) {

            const response = await fetch('http://localhost:3000/api/updateUserDetails', {
                body: JSON.stringify({
                        Name,
                        Age,
                        PhoneNumber,
                        DoctorsName,
                        Ailments,
                        Medication,
                        Address,
                        PatientStatus,
                        Gender,
                    }
                ),
                // credentials: 'include',
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            });

            console.log(response);

            //
            if (response.status === 200) {

                Toast = (toast({
                    title: 'Everything worked',
                    description: 'Account Details are updated',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                }))


            } else if (response.status === 400) {

                Toast = (toast({
                    title: 'Error',
                    description: 'Something went wrong , please try again later.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                }))
            }

        }
    }


    return (

        <>
            <NavBar name={'name'}/>
            <Container maxW='container.xl' px={5} py={2}>
                <Container maxW='container.lg' py={35} px={100}>
                    <Card bg={bgColor} p={15}>

                        <Wrap spacing={5}>

                            <WrapItem>


                                <Box maxW='full'>
                                    <Heading mb={4}>Update your profile</Heading>
                                    <Text fontSize='lg'>
                                        Keep your profile up to date so your doctors can get to know more about your
                                        ailments
                                        and help you out even faster.
                                    </Text>
                                </Box>

                            </WrapItem>


                            <Divider w={'full'}/>


                            <WrapItem>

                                <SimpleGrid spacing={3} columns={2} columnGap={45}>
                                    <GridItem colSpan={1}>
                                        <Flex>
                                            <form onSubmit={submit}>
                                                <FormControl isDisabled={inputDisabled}>
                                                    <SimpleGrid p={2} columnGap={100} rowGap={5} columns={2}>

                                                        <GridItem colSpan={1}>
                                                            <FormLabel>Name</FormLabel>
                                                            <Input type='text' defaultValue={name} w='auto'
                                                                   onChange={e => setName(e.target.value)}/>
                                                        </GridItem>
                                                        <GridItem colSpan={1}>
                                                            <FormLabel>Email address</FormLabel>
                                                            <Input type='email' defaultValue={email} w='auto'
                                                            />
                                                        </GridItem>

                                                        <GridItem colSpan={1}>
                                                            <FormLabel>Age</FormLabel>
                                                            <Input type='number' defaultValue={age} w='auto'
                                                                   onChange={e => setAge(e.target.value)}/>
                                                        </GridItem>

                                                        <GridItem colSpan={1}>
                                                            <FormLabel>Phone Number</FormLabel>
                                                            <Input type='text' defaultValue={phoneNumber} w='auto'
                                                                   onChange={e => setPhoneNumber(e.target.value)}/>
                                                        </GridItem>

                                                        <GridItem colSpan={1}>
                                                            <FormLabel>Gender</FormLabel>
                                                            <Input type='text' defaultValue={gender} w='auto'
                                                                   onChange={e => setGender(e.target.value)}/>
                                                        </GridItem>

                                                        <GridItem colSpan={1}>
                                                            <FormLabel>Doctor's Name</FormLabel>
                                                            <Input type='text' defaultValue={doctorsName} w='auto'
                                                                   onChange={e => setDoctorsName(e.target.value)}/>
                                                        </GridItem>

                                                        <GridItem colSpan={1}>
                                                            <FormLabel>Ailments</FormLabel>
                                                            <Input type='text' defaultValue={ailments}
                                                                   w='auto'
                                                                   onChange={e => setAilments(e.target.value)}/>
                                                        </GridItem>

                                                        <GridItem colSpan={1}>
                                                            <FormLabel>Medications</FormLabel>
                                                            <Input type='text' defaultValue={medication}
                                                                   w='auto'
                                                                   onChange={e => setMedication(e.target.value)}/>
                                                        </GridItem>

                                                        <GridItem colSpan={1}>
                                                            <FormLabel>Address</FormLabel>
                                                            <Input type='text' defaultValue={address} w='auto'
                                                                   onChange={e => setAddress(e.target.value)}/>
                                                        </GridItem>

                                                        <GridItem colSpan={1}>
                                                            <FormLabel>Status</FormLabel>
                                                            <Select>
                                                                <option>Alive</option>
                                                                <option>Dead 💀</option>
                                                            </Select>
                                                        </GridItem>


                                                        <GridItem colSpan={1}>
                                                            <Button size='md' w='full' colorScheme='brand' type='submit'
                                                                    onClick={updateDetails}> {buttonData} </Button>
                                                        </GridItem>


                                                    </SimpleGrid>
                                                </FormControl>
                                            </form>

                                        </Flex>
                                    </GridItem>


                                    <GridItem colSpan={1}>
                                        <Container maxW='container.xl' px={180}>
                                            <Flex>


                                                <VStack align={'center'}>

                                                    <WrapItem>
                                                        <Avatar size='xl' name='Christian Nwamba'
                                                                src='https://bit.ly/code-beast'/>{' '}
                                                    </WrapItem>
                                                    <Text>{name}</Text>
                                                    <Text>{email}</Text>
                                                    <Text>{phoneNumber}</Text>
                                                    <Divider orientation='horizontal' w={100}/>
                                                    <Button py={4} size='md' w='full' colorScheme='brand'>
                                                        Generate Report
                                                    </Button>

                                                </VStack>
                                            </Flex>
                                        </Container>


                                    </GridItem>
                                </SimpleGrid>
                            </WrapItem>


                        </Wrap>
                    </Card>

                </Container>
            </Container>

        </>

    )
        ;
}