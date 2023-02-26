// Email Input React Component

import {Input, InputGroup, InputLeftAddon} from '@chakra-ui/react';
import * as React from 'react';

export default function EmailInput() {
    return (
        <InputGroup>
            <InputLeftAddon children={'@'}/>
            <Input type='email' focusBorderColor='red.300' placeholder='Enter Email Address'/>
        </InputGroup>);
}


