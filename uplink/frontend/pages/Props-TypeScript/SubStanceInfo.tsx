/*

Author : Pranav
Created on : 27-03-2023
IDE : GoLand

*/

import * as React from 'react';
import {SyntheticEvent, useState} from 'react';
import {Button, Checkbox, FormControl, FormLabel, GridItem, Input, SimpleGrid} from "@chakra-ui/react";

interface CheckboxItem {
    value: string;
    isChecked: boolean;
}


const SubStanceInfo = (props: { substance: string, handleClick: any }) => {


        const [CurrentlyUsing, setCurrentlyUsing] = useState(''),
            [Category, setCategory] = useState(''),
            [AgeOfFirstUsed, setAgeOfFirstUsed] = useState(''),
            [AmountAndFrequency, setAmountAndFrequency] = useState(''),
            [Duration, setDuration] = useState(''),
            [LastUsage, setLastUsage] = useState(''),
            [checkedItemsForSubStanceUse, setCheckedItemsForSubStanceUse] = useState<CheckboxItem[]>([]);


        const handleCheckboxChangeForSystemReview = (e: React.ChangeEvent<HTMLInputElement>) => {
            const {value, checked} = e.target;

            const newItems = checkedItemsForSubStanceUse.map((item) =>
                item.value === value ? {...item, isChecked: checked} : item
            );

            if (!newItems.some((item) => item.value === value)) {
                newItems.push({value, isChecked: checked});
            }

            setCheckedItemsForSubStanceUse(newItems);

        };


        let subStanceUse;

        // @ts-ignore
        const handleSubmit = async (e: SyntheticEvent) => {
            e.preventDefault();

            subStanceUse = checkedItemsForSubStanceUse.reduce((obj, item) => {
                obj[item.value] = item.isChecked;
                return obj;
            }, {});

            let data;


            if(props.substance === 'Others'){
                data = {

                        Category: Category,
                        AgeOfFirstUsed: AgeOfFirstUsed,
                        AmountAndFrequency: AmountAndFrequency,
                        Duration: Duration,
                        LastUsage: LastUsage,
                        CurrentlyUsing: CurrentlyUsing,
                        ...subStanceUse

                }

            }
            else {
                data = {
                    [props.substance]: {
                        Category: Category,
                        AgeOfFirstUsed: AgeOfFirstUsed,
                        AmountAndFrequency: AmountAndFrequency,
                        Duration: Duration,
                        LastUsage: LastUsage,
                        CurrentlyUsing: CurrentlyUsing,
                        ...subStanceUse
                    },
                };

            }


            props.handleClick(data)

        };


        return (
            <>

                <form onSubmit={handleSubmit}>
                    <FormControl display='flex' alignItems='center'>
                        <SimpleGrid columns={3} spacing={4}>
                            <GridItem mx={5} colSpan={1}>
                                <FormLabel>What is the Drug Category ?</FormLabel>
                                <Input onChange={e => setCategory(e.target.value)} my={3} variant='outline'
                                       placeholder='e.g: Inhalants'/>
                            </GridItem>
                            <GridItem mx={2} colSpan={2}>
                                <FormLabel>How recently did you last consume {props.substance} ?</FormLabel>
                                <Input onChange={e => setAgeOfFirstUsed(e.target.value)} my={3} variant='outline'
                                       placeholder='e.g: 2 Hours ago'/>
                            </GridItem>
                            <GridItem mx={5} colSpan={1}>
                                <FormLabel>Amount and frequency of {props.substance}</FormLabel>
                                <Input onChange={e => setAmountAndFrequency(e.target.value)} my={3} variant='outline'
                                       placeholder='e.g: Daily'/>
                            </GridItem>
                            <GridItem mx={2} colSpan={1}>
                                <FormLabel>Age of first use of {props.substance}?</FormLabel>
                                <Input onChange={e => setDuration(e.target.value)} my={3} variant='outline'
                                       placeholder='e.g: 35'/>
                            </GridItem>
                            <GridItem mx={2} colSpan={1}>
                                <FormLabel>Duration of consuming {props.substance} ?</FormLabel>
                                <Input onChange={e => setLastUsage(e.target.value)} my={3} variant='outline'
                                       placeholder='e.g: 10 years'/>
                            </GridItem>
                            <GridItem mx={2} my={3} colSpan={3}>
                                <Checkbox value='CurrentlyUsing' onChange={handleCheckboxChangeForSystemReview}
                                          colorScheme='green'>Are you currently consuming {props.substance} ?</Checkbox>
                            </GridItem>

                            <GridItem mx={3} colSpan={3}>
                                <Button my={5} w='full' type="submit">Submit</Button>
                            </GridItem>
                        </SimpleGrid>
                    </FormControl>
                </form>

            </>
        );
    }
;

export default SubStanceInfo;