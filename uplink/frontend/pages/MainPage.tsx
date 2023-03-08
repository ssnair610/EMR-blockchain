import * as React from 'react';
import NavBar from "./Props-TypeScript/NavBar";
import Cookie from "./Props-TypeScript/Cookie";
import SideDrawer from "./Props-TypeScript/SideDrawer";
import {Card, Container, Heading, Text, useColorModeValue, Wrap, WrapItem} from "@chakra-ui/react";


const MainPage = () => {

    const url = 'http://localhost:3000/api/user'
    let {name: name} = Cookie(url);
    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');

    return (
        <>
            <NavBar name={name}/>
            <SideDrawer></SideDrawer>

            <Container maxW='container.xl' p={5}>
                <Wrap spacing={10}>
                    <WrapItem>
                        <Card bg={bgColor} p={10}>
                            <Heading>Welcome Back</Heading>
                            <Text py={5}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        </Card>
                    </WrapItem>
                    <WrapItem>

                        <Card bg={bgColor} p={10}>
                            <Heading>Whats new</Heading>
                            <Text py={5}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        </Card>
                    </WrapItem>

                </Wrap>

            </Container>

        </>
    )
        ;
};

export default MainPage;