/*

Author : Pranav
Created on : 03-04-2023
IDE : GoLand

*/

import * as React from 'react';
import {SyntheticEvent, useState} from 'react';
import {Button, FormControl, FormLabel, GridItem, Input, SimpleGrid} from "@chakra-ui/react";

const MedicationData = (props:{handleClick: any} ) => {

    const [Name, setName] = useState(''),
        [Dose, setDose] = useState(''),
        [Duration, setDuration] = useState('');

    // @ts-ignore
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        let data;
        data = {
            Name:Name,
            Dose:Dose,
            Duration:Duration
        }
        props.handleClick(data)

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <FormControl display='flex' alignItems='center'>

                <SimpleGrid columns={3} spacing={5}>

                    <GridItem>
                        <FormLabel>Whats the Drug Name ?</FormLabel>
                        <Input my={3} variant='outline' onChange={e => setName(e.target.value)}
                               placeholder='e.g: Paracetamol'/>
                    </GridItem>
                    <GridItem>
                        <FormLabel>What was the does ?</FormLabel>
                        <Input my={3} variant='outline' onChange={e => setDose(e.target.value)}
                               placeholder='e.g: 10mg'/>
                    </GridItem>
                    <GridItem>
                        <FormLabel>What was / is the duration ?</FormLabel>
                        <Input my={3} variant='outline' onChange={e => setDuration(e.target.value)}
                               placeholder='e.g: 3 days'/>
                    </GridItem>
                    <GridItem mx={3} colSpan={3}>
                        <Button my={5} w='full' type="submit">Submit</Button>
                    </GridItem>

                </SimpleGrid>
            </FormControl>
            </form>


        </>
    );
};

export default MedicationData;