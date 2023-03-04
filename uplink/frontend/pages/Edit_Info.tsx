import {Container, Flex, FormControl, FormLabel, GridItem, Input, SimpleGrid} from '@chakra-ui/react';
import *as React from 'react';
import Footer from "./Props-TypeScript/Footer";
import NavBar from "./Props-TypeScript/NavBar"

export default function Edit_Info() {
    return (

        <>
            <NavBar mode={''}/>

            <Container maxW='container.xl'>
                <Flex>
                    <SimpleGrid columnGap={3} rowGap={6}>

                        <FormControl>

                            <GridItem colSpan={2}>
                                <FormLabel>Email address</FormLabel>
                                <Input type='email'/>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <FormLabel>Email address</FormLabel>
                                <Input type='email'/>
                            </GridItem>


                        </FormControl>
                    </SimpleGrid>

                </Flex>
            </Container>

        </>

    );
}