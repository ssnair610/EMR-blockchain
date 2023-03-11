import * as React from 'react';
import NavBar from "../Props-TypeScript/NavBar";
import Cookie from "../Props-TypeScript/Cookie";
import SideDrawer from "../Props-TypeScript/SideDrawer";
import {
    Card,
    CardBody,
    CardFooter,
    Container,
    Heading,
    useColorModeValue,
    Image,
    Stack,
    Text,
    ButtonGroup,
    Divider,
    Button,
    Badge,
    SimpleGrid,
    HStack,
} from "@chakra-ui/react";


const DocMainPage = () => {

    const url = 'http://localhost:3000/api/DocUser'
    let {name: name} = Cookie(url);
    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');

    return (
        <>
            <NavBar name={name}/>
            <SideDrawer></SideDrawer>

            <Container maxW='container.xl' p={5}>

                <Card bg={bgColor} p={10}>
                    <Heading my={10}>Welcome Back</Heading>


                    <Container maxW='container.lg' centerContent>

                    <HStack spacing={10}>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://asset.vg247.com/wolfenstein_2_the_new_colossus.jpg/BROK/thumbnail/1200x1200/quality/100/wolfenstein_2_the_new_colossus.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>William Joesph Blazkowicz</Heading>
                                    <Text>
                                        War veteran , has numerous war injuries and concussions ,
                                        complains of sever back and neck pain , and gets nightmares
                                        about the war and large robots attacking him.</Text>
                                    <Badge w='13%' ml='1' borderRadius='25' colorScheme='green'>
                                        New
                                    </Badge>

                                </Stack>
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
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://cdn.wccftech.com/wp-content/uploads/2019/10/WCCFcallofdutymodernwarfare20199.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Price</Heading>
                                    <Text>
                                        War veteran , has numerous war injuries and concussions ,
                                        complains of staying frosty , and gets nightmares
                                        about the war and large robots attacking him.</Text>
                                    <Badge w='13%' ml='1' borderRadius='25' colorScheme='green'>
                                        New
                                    </Badge>

                                </Stack>
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
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://static.wikia.nocookie.net/callofduty/images/9/93/RonaldRedDaniels_FrontLines_WWII.jpg/revision/latest?cb=20170919155428'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Ronald "Red" Daniels[</Heading>
                                    <Text>
                                        War veteran , has numerous war injuries and concussions ,
                                        has been shell shocked , and gets nightmares
                                        about the war and the war.</Text>
                                    <Badge w='13%' ml='1' borderRadius='25' colorScheme='green'>
                                        New
                                    </Badge>

                                </Stack>
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