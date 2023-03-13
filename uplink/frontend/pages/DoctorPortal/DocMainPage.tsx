import * as React from 'react';
import NavBar from "../Props-TypeScript/NavBar";
import Cookie from "../Props-TypeScript/Cookie";
import SideDrawer from "../Props-TypeScript/SideDrawer";
import {
    Badge,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Container,
    Divider,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";


const DocMainPage = () => {

    const url = 'http://localhost:3000/api/DocUser'
    let {name: name} = Cookie(url);
    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');

    return (
        <>
            <NavBar mode='doc' name={name}/>
            <SideDrawer mode='doc'/>

            <Container maxW='container.xl' p={5}>

                <Card bg={bgColor} p={10}>
                    <Heading my={10}>Welcome Back</Heading>


                    <Container maxW='container.lg' centerContent>

                        <HStack spacing={10}>
                            <Card maxW='sm' w='full'>
                                <CardBody>
                                    <Image
                                        src='https://i.redd.it/iaopf8o4dws41.jpg'
                                        alt='Green double couch with wooden legs'
                                        borderRadius='sm'
                                        htmlHeight={400} htmlWidth={519}
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>William Joesph Blazkowicz</Heading>
                                        <Text>
                                            War veteran , has numerous war injuries and concussions ,
                                            complains of sever back and neck pain , and gets nightmares
                                            about the war and large robots attacking him.</Text>

                                    </Stack>
                                    <Badge w='auto' my={2} borderRadius='25' colorScheme='green'>
                                        New
                                    </Badge>
                                </CardBody>
                                <Divider/>
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='solid' colorScheme='blue'>
                                            More Information
                                        </Button>
                                        <Button variant='ghost' colorScheme='blue'>
                                            Share
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                            <Card maxW='sm' w='full'>
                                <CardBody>
                                    <Image
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRemcSUY7WgFgYNXY_YUWu5minBkS8BIQiqFSOXowJ7bOBOlhZlZcw2FD0UHT93xusvAaA&usqp=CAU'
                                        alt='Green double couch with wooden legs'
                                        htmlHeight={400} htmlWidth={519}
                                        borderRadius='sm'

                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>Price</Heading>
                                        <Text>
                                            War veteran , has numerous war injuries and concussions ,
                                            complains of staying frosty , and gets nightmares
                                            about artillery attacks . Has been Shell shocked.</Text>


                                    </Stack>
                                    <Badge w='auto' my={2} borderRadius='25' colorScheme='red'>
                                        Hospitalized
                                    </Badge>
                                </CardBody>
                                <Divider/>
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='solid' colorScheme='blue'>
                                            More Information
                                        </Button>
                                        <Button variant='ghost' colorScheme='blue'>
                                            Share
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                            <Card maxW='sm' w='full'>
                                <CardBody>
                                    <Image
                                        src='https://www.giantbomb.com/a/uploads/scale_small/15/153607/2895175-mario%2013.png'
                                        alt='Green double couch with wooden legs'
                                        borderRadius='sm'
                                        htmlHeight={400} htmlWidth={519}/>
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>Mario</Heading>
                                        <Text>
                                            Has a history of head concussions due to high speed racing inchidents .
                                            Talks in his sleeps about how FIA was unfair to him in more than once
                                            situation</Text>


                                    </Stack>
                                    <Badge w='auto' my={2} borderRadius='25' colorScheme='purple'>
                                        Regular
                                    </Badge>
                                </CardBody>
                                <Divider/>
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='solid' colorScheme='blue'>
                                            More Information
                                        </Button>
                                        <Button variant='ghost' colorScheme='blue'>
                                            Share
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>

                        </HStack>
                    </Container>

                </Card>


            </Container>

        </>
    )
        ;
};

export default DocMainPage;