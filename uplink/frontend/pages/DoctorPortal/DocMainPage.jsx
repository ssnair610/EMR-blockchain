"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var NavBar_1 = require("../Props-TypeScript/NavBar");
var Cookie_1 = require("../Props-TypeScript/Cookie");
var SideDrawer_1 = require("../Props-TypeScript/SideDrawer");
var react_1 = require("@chakra-ui/react");
var DocMainPage = function () {
    var url = 'http://localhost:3000/api/DocUser';
    var name = (0, Cookie_1.default)(url).name;
    var bgColor = (0, react_1.useColorModeValue)('gray.50', 'whiteAlpha.50');
    return (<>
            <NavBar_1.default name={name}/>
            <SideDrawer_1.default></SideDrawer_1.default>

            <react_1.Container maxW='container.xl' p={5}>

                <react_1.Card bg={bgColor} p={10}>
                    <react_1.Heading my={10}>Welcome Back</react_1.Heading>


                    <react_1.Container maxW='container.lg' centerContent>

                    <react_1.HStack spacing={10}>
                        <react_1.Card maxW='sm'>
                            <react_1.CardBody>
                                <react_1.Image src='https://asset.vg247.com/wolfenstein_2_the_new_colossus.jpg/BROK/thumbnail/1200x1200/quality/100/wolfenstein_2_the_new_colossus.jpg' alt='Green double couch with wooden legs' borderRadius='lg'/>
                                <react_1.Stack mt='6' spacing='3'>
                                    <react_1.Heading size='md'>William Joesph Blazkowicz</react_1.Heading>
                                    <react_1.Text>
                                        War veteran , has numerous war injuries and concussions ,
                                        complains of sever back and neck pain , and gets nightmares
                                        about the war and large robots attacking him.</react_1.Text>
                                    <react_1.Badge w='13%' ml='1' borderRadius='25' colorScheme='green'>
                                        New
                                    </react_1.Badge>

                                </react_1.Stack>
                            </react_1.CardBody>
                            <react_1.Divider />
                            <react_1.CardFooter>
                                <react_1.ButtonGroup spacing='2'>
                                    <react_1.Button variant='solid' colorScheme='blue'>
                                        More Information
                                    </react_1.Button>
                                    <react_1.Button variant='ghost' colorScheme='blue'>
                                        Share
                                    </react_1.Button>
                                </react_1.ButtonGroup>
                            </react_1.CardFooter>
                        </react_1.Card>
                        <react_1.Card maxW='sm'>
                            <react_1.CardBody>
                                <react_1.Image src='https://cdn.wccftech.com/wp-content/uploads/2019/10/WCCFcallofdutymodernwarfare20199.jpg' alt='Green double couch with wooden legs' borderRadius='lg'/>
                                <react_1.Stack mt='6' spacing='3'>
                                    <react_1.Heading size='md'>Price</react_1.Heading>
                                    <react_1.Text>
                                        War veteran , has numerous war injuries and concussions ,
                                        complains of staying frosty , and gets nightmares
                                        about the war and large robots attacking him.</react_1.Text>
                                    <react_1.Badge w='13%' ml='1' borderRadius='25' colorScheme='green'>
                                        New
                                    </react_1.Badge>

                                </react_1.Stack>
                            </react_1.CardBody>
                            <react_1.Divider />
                            <react_1.CardFooter>
                                <react_1.ButtonGroup spacing='2'>
                                    <react_1.Button variant='solid' colorScheme='blue'>
                                        More Information
                                    </react_1.Button>
                                    <react_1.Button variant='ghost' colorScheme='blue'>
                                        Share
                                    </react_1.Button>
                                </react_1.ButtonGroup>
                            </react_1.CardFooter>
                        </react_1.Card>
                        <react_1.Card maxW='sm'>
                            <react_1.CardBody>
                                <react_1.Image src='https://static.wikia.nocookie.net/callofduty/images/9/93/RonaldRedDaniels_FrontLines_WWII.jpg/revision/latest?cb=20170919155428' alt='Green double couch with wooden legs' borderRadius='lg'/>
                                <react_1.Stack mt='6' spacing='3'>
                                    <react_1.Heading size='md'>Ronald "Red" Daniels[</react_1.Heading>
                                    <react_1.Text>
                                        War veteran , has numerous war injuries and concussions ,
                                        has been shell shocked , and gets nightmares
                                        about the war and the war.</react_1.Text>
                                    <react_1.Badge w='13%' ml='1' borderRadius='25' colorScheme='green'>
                                        New
                                    </react_1.Badge>

                                </react_1.Stack>
                            </react_1.CardBody>
                            <react_1.Divider />
                            <react_1.CardFooter>
                                <react_1.ButtonGroup spacing='2'>
                                    <react_1.Button variant='solid' colorScheme='blue'>
                                        More Information
                                    </react_1.Button>
                                    <react_1.Button variant='ghost' colorScheme='blue'>
                                        Share
                                    </react_1.Button>
                                </react_1.ButtonGroup>
                            </react_1.CardFooter>
                        </react_1.Card>

                    </react_1.HStack>
                    </react_1.Container>

                </react_1.Card>


            </react_1.Container>

        </>);
};
exports.default = DocMainPage;
