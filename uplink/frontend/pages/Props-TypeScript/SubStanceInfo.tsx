/*

Author : Pranav
Created on : 27-03-2023
IDE : GoLand

*/

import * as React from 'react';
import {Checkbox, FormLabel, GridItem, Input, SimpleGrid} from "@chakra-ui/react";

const SubStanceInfo = (props: { substance: string }) => {
    return (
        <>
            <SimpleGrid columns={3} spacing={4}>
                <GridItem mx={5} colSpan={1}>
                    <FormLabel>What is the Drug Category ?</FormLabel>
                    <Input my={3} variant='outline' placeholder='e.g: Inhalants'/>
                </GridItem>
                <GridItem mx={2} colSpan={2}>
                    <FormLabel>How recently did you last consume {props.substance} ?</FormLabel>
                    <Input my={3} variant='outline' placeholder='e.g: 2 Hours ago'/>
                </GridItem>
                <GridItem mx={5} colSpan={1}>
                    <FormLabel>Amount and frequency of {props.substance}</FormLabel>
                    <Input my={3} variant='outline' placeholder='e.g: Daily'/>
                </GridItem>
                <GridItem mx={2} colSpan={1}>
                    <FormLabel>Age of first use of {props.substance}?</FormLabel>
                    <Input my={3} variant='outline' placeholder='e.g: 35'/>
                </GridItem>
                <GridItem mx={2} colSpan={1}>
                    <FormLabel>Duration of consuming {props.substance} ?</FormLabel>
                    <Input my={3} variant='outline' placeholder='e.g: 10 years'/>
                </GridItem>
                <GridItem mx={2} my={3} colSpan={3}>
                    <Checkbox colorScheme='green'>Are you currently consuming {props.substance} ?</Checkbox>
                </GridItem>
            </SimpleGrid>

        </>
    );
};

export default SubStanceInfo;