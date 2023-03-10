"use strict";
/*

Author : Pranav
Data of Creation : 08-03-2023
Project Name : tempo
IDE : IntelliJ IDEA

*/
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@chakra-ui/react");
var NavBar_1 = require("./Props-TypeScript/NavBar");
var Cookie_1 = require("./Props-TypeScript/Cookie");
var SideDrawer_1 = require("./Props-TypeScript/SideDrawer");
var Settings = function () {
    var url = 'http://localhost:3000/api/user';
    var name = (0, Cookie_1.default)(url).name;
    var bgColor = (0, react_1.useColorModeValue)('gray.50', 'whiteAlpha.50');
    return (<>
            <NavBar_1.default name={name}/>

            <SideDrawer_1.default />

            <react_1.Container maxW='container.xl' p={5} centerContent>


                <react_1.Card p={5} bg={bgColor}>

                    <react_1.Heading>Settings</react_1.Heading>
                    <react_1.Text py={5}>House Keeping in progress !!</react_1.Text>

                    <react_1.Tabs>
                        <react_1.TabList>
                            <react_1.Tab>Account Settings</react_1.Tab>
                            <react_1.Tab>Doctor Access</react_1.Tab>
                            <react_1.Tab>Block Chain Settings</react_1.Tab>
                            <react_1.Tab>Website Settings</react_1.Tab>
                        </react_1.TabList>
                        <react_1.Divider />
                        <react_1.TabPanels>
                            <react_1.TabPanel>
                                <react_1.FormControl display='flex' alignItems='center'>

                                    <react_1.SimpleGrid columns={2} spacing={5}>

                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 1
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 2
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 3
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 4
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>


                                    </react_1.SimpleGrid>
                                </react_1.FormControl>


                            </react_1.TabPanel>
                            <react_1.TabPanel>
                                <react_1.FormControl display='flex' alignItems='center'>

                                    <react_1.SimpleGrid columns={2} spacing={5}>

                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 1
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 2
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 3
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 4
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>


                                    </react_1.SimpleGrid>
                                </react_1.FormControl>

                            </react_1.TabPanel>
                            <react_1.TabPanel>
                                <react_1.FormControl display='flex' alignItems='center'>

                                    <react_1.SimpleGrid columns={2} spacing={5}>

                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 1
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 2
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 3
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 4
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>


                                    </react_1.SimpleGrid>
                                </react_1.FormControl>

                            </react_1.TabPanel>
                            <react_1.TabPanel>
                                <react_1.FormControl display='flex' alignItems='center'>

                                    <react_1.SimpleGrid columns={2} spacing={5}>

                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 1
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 2
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 3
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 4
                                            </react_1.FormLabel>
                                        </react_1.GridItem>
                                        <react_1.GridItem colSpan={1}>

                                            <react_1.Switch size='lg' id='email-alerts'/>
                                        </react_1.GridItem>


                                    </react_1.SimpleGrid>
                                </react_1.FormControl>

                            </react_1.TabPanel>
                        </react_1.TabPanels>
                    </react_1.Tabs>
                </react_1.Card>
            </react_1.Container>

        </>);
};
exports.default = Settings;
