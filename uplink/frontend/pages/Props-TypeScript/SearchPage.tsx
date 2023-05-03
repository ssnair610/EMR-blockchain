/*

Author : Pranav
Created on : 12-04-2023
IDE : GoLand

*/

import * as React from 'react';
import {Input, InputGroup, InputLeftElement, useColorModeValue} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

const searchPage = () => {

    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');


    return (
        <>


            <InputGroup w="50%" ml="auto" mr="auto">
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.6 00"/>}
                />
                <Input type="text" placeholder="Search..." borderRadius="lg" pl={10}/>
            </InputGroup>


        </>
    );
};

export default searchPage;