/*

Author : Pranav
Created on : 28-03-2023
IDE : GoLand

*/

import * as React from 'react';
import {SyntheticEvent, useState} from 'react';
import {Button, FormControl, FormLabel, GridItem, Input, SimpleGrid} from "@chakra-ui/react";

const FamilyDetails = (props: { mode: string, handleClick: any }) => {


    const [Age, setAge] = useState(''),
        [Health, setHealth] = useState(''),
        [AgeAtDeath, setAgeAtDeath] = useState(''),
        [Cause, setCause] = useState('')

    // @ts-ignore
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        let data;

        if (props.mode === 'Siblings' || props.mode === 'Children') {
            data = {
                Age: Age,
                Health: Health,
                AgeAtDeath: AgeAtDeath,
                Cause: Cause,
            }
        } else {
            data = {
                [props.mode]: {
                    Age: Age,
                    Health: Health,
                    AgeAtDeath: AgeAtDeath,
                    Cause: Cause,
                },
            };
        }

        props.handleClick(data)


    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormControl display='flex' alignItems='center'>
                    <SimpleGrid columns={3} spacing={5}>

                        <GridItem mx={3} colSpan={1}>
                            <FormLabel>Age</FormLabel>
                            <Input my={3} name="Age" variant='outline' placeholder='e.g: 65'
                                   onChange={e => setAge(e.target.value)}/>
                        </GridItem>
                        <GridItem mx={3} colSpan={1}>
                            <FormLabel>Health</FormLabel>
                            <Input my={3} name="HealthAndPsychiatric" variant='outline'
                                   placeholder='e.g: Heart Defects' onChange={e => setHealth(e.target.value)}/>
                        </GridItem>
                        <GridItem mx={3} colSpan={1}>
                            <FormLabel>Age at Death</FormLabel>
                            <Input my={3} name="AgeAtDeath" variant='outline' placeholder='e.g: 65'
                                   onChange={e => setAgeAtDeath(e.target.value)}/>
                        </GridItem>
                        <GridItem mx={3} colSpan={3}>
                            <FormLabel>Cause of Death</FormLabel>
                            <Input my={3} name="Cause" variant='outline'
                                   placeholder='e.g: Heart Attack' onChange={e => setCause(e.target.value)}/>
                        </GridItem>

                        <GridItem mx={3} colSpan={3}>
                            <Button my={5} w='full' type="submit">Submit</Button>
                        </GridItem>

                    </SimpleGrid>
                </FormControl>
            </form>


        </>
    )
        ;
};

export default FamilyDetails;