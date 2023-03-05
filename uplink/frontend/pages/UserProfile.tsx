import {Container, Flex, FormControl, FormLabel, GridItem, Input, SimpleGrid} from '@chakra-ui/react';
import *as React from 'react';
import NavBar from "./Props-TypeScript/NavBar"
import Cookie from "./Props-TypeScript/cookie";

export default function UserProfile() {
    const url = 'http://localhost:3000/api/getUserDetails'
    let {name, email} = Cookie(url);

    return (

        <>
            <NavBar name={'name'}/>

            <Container maxW='container.xl'>
                <Flex>
                    <SimpleGrid columnGap={3} rowGap={6}>

                        <FormControl>

                            <GridItem colSpan={2}>
                                <FormLabel>Name</FormLabel>
                                <Input type='text' placeholder={name}/>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <FormLabel>Email address</FormLabel>
                                <Input type='email' placeholder={email}/>
                            </GridItem>


                        </FormControl>
                    </SimpleGrid>

                </Flex>
            </Container>

        </>

    );
}