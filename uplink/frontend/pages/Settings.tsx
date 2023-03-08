/*

Author : Pranav
Data of Creation : 08-03-2023
Project Name : tempo
IDE : IntelliJ IDEA

*/

import * as React from 'react';
import {
    Card,
    Container,
    Divider,
    FormControl,
    FormLabel,
    GridItem,
    Heading,
    SimpleGrid,
    Switch,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import NavBar from "./Props-TypeScript/NavBar";
import Cookie from "./Props-TypeScript/Cookie";
import SideDrawer from "./Props-TypeScript/SideDrawer";


const Settings = () => {

    const url = 'http://localhost:3000/api/user'
    let {name: name} = Cookie(url);
    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');

    return (
        <>
            <NavBar name={name}/>

            <SideDrawer></SideDrawer>

            <Container maxW='container.xl' p={5} centerContent>


                <Card p={5} bg={bgColor}>

                    <Heading>Settings</Heading>
                    <Text py={5}>House Keeping in progress !!</Text>

                    <Tabs>
                        <TabList>
                            <Tab>Account Settings</Tab>
                            <Tab>Doctor Access</Tab>
                            <Tab>Block Chain Settings</Tab>
                            <Tab>Website Settings</Tab>
                        </TabList>
                        <Divider/>
                        <TabPanels>
                            <TabPanel>
                                <FormControl display='flex' alignItems='center'>

                                    <SimpleGrid columns={2} spacing={5}>

                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 1
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 2
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 3
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 4
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>


                                    </SimpleGrid>
                                </FormControl>


                            </TabPanel>
                            <TabPanel>
                                <FormControl display='flex' alignItems='center'>

                                    <SimpleGrid columns={2} spacing={5}>

                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 1
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 2
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 3
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 4
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>


                                    </SimpleGrid>
                                </FormControl>

                            </TabPanel>
                            <TabPanel>
                                <FormControl display='flex' alignItems='center'>

                                    <SimpleGrid columns={2} spacing={5}>

                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 1
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 2
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 3
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 4
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>


                                    </SimpleGrid>
                                </FormControl>

                            </TabPanel>
                            <TabPanel>
                                <FormControl display='flex' alignItems='center'>

                                    <SimpleGrid columns={2} spacing={5}>

                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 1
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 2
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 3
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <FormLabel htmlFor='email-alerts' mb='0'>
                                                Option 4
                                            </FormLabel>
                                        </GridItem>
                                        <GridItem colSpan={1}>

                                            <Switch size='lg' id='email-alerts'/>
                                        </GridItem>


                                    </SimpleGrid>
                                </FormControl>

                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Card>
            </Container>

        </>
    )
        ;
};

export default Settings;