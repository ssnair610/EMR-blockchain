import * as React from 'react';
import NavBar from "../Props-TypeScript/NavBar";
import Cookie from "../Props-TypeScript/Cookie";
import SideDrawer from "../Props-TypeScript/SideDrawer";
import {Card, Container, Heading, Text, useColorModeValue, Wrap, WrapItem} from "@chakra-ui/react";


const MainPage = () => {

    const url = 'http://localhost:3000/api/user'
    let {name: name} = Cookie(url);
    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');

    return (
        <>
            <NavBar mode='patient' name={name}/>
            <SideDrawer mode='patient'/>

            <Container maxW='container.xl' p={5}>
                <Wrap spacing={10}>
                    <WrapItem>
                        <Card bg={bgColor} p={10}>
                            <Heading>Welcome Back</Heading>
                            <Text py={5}> Hey there, {name}! It's great to have you back on our website. We hope
                                you've
                                been keeping well and that you're excited to explore all the new features and updates
                                we've made since your last visit. Our team has been working hard to enhance your
                                experience and make our site even more user-friendly. As always, if you have any
                                questions or feedback, feel free to reach out to us. Thank you for being a loyal member
                                of our community, and we can't wait to show you all the amazing things we have in
                                store!</Text>
                        </Card>
                    </WrapItem>
                    <WrapItem>

                        <Card bg={bgColor} p={10}>
                            <Heading>Whats new</Heading>
                            <Text py={5}> Blockchain technology has the potential to revolutionize the healthcare
                                industry in numerous ways. One of the most exciting developments is the ability to
                                securely store and share patient data across different healthcare providers, ensuring
                                that critical medical information is always accessible in a timely manner. In addition
                                to enhancing data security, blockchain can also improve patient privacy by allowing
                                individuals to have more control over their personal health information.</Text>
                        </Card>
                    </WrapItem>

                </Wrap>

            </Container>

        </>
    )
        ;
};

export default MainPage;