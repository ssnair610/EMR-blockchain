import {Button, Container, Flex, FormControl, FormLabel, GridItem, Input, SimpleGrid} from '@chakra-ui/react';
import *as React from 'react';
import {SyntheticEvent, useState} from 'react';
import NavBar from "./Props-TypeScript/NavBar"
import Cookie from "./Props-TypeScript/Cookie";

export default function UserProfile() {
    const url = 'http://localhost:3000/api/getUserDetails'
    let {name, email} = Cookie(url);
    let [inputDisabled, isInputDisabled] = useState(true);
    let [buttonData, setButtonData] = useState('Update details');


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
        //
        //
        // e.preventDefault();
        // const response = await fetch('http://localhost:3000/api/login', {
        //     body: JSON.stringify({
        //             Email,
        //             Password
        //         }
        //     ),
        //     credentials: 'include',
        //     headers: {'Content-Type': 'application/json'},
        //     method: 'POST'
        // });
        //
        // if (response.status === 202) {
        //
        //
        // } else if (response.status === 400) {
        //
        // }


    }


    return (

        <>
            <NavBar name={'name'}/>

            <Container maxW='container.xl'>
                <Flex>
                    <form onSubmit={submit}>
                        <FormControl isDisabled={inputDisabled} >
                            <SimpleGrid columnGap={3} rowGap={5} columns={2}>


                                <GridItem colSpan={1}>
                                    <FormLabel>Name</FormLabel>
                                    <Input type='text' defaultValue={name}/>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type='email' defaultValue={email}/>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <Button size='md' w='full' colorScheme='brand'
                                            onClick={updateDetails}> {buttonData} </Button>
                                </GridItem>


                            </SimpleGrid>
                        </FormControl>
                    </form>

                </Flex>
            </Container>

        </>

    );
}