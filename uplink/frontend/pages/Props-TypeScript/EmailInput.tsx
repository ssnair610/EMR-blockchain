// Email Input React Component

import {Input, InputGroup, InputLeftAddon} from '@chakra-ui/react';
import * as React from 'react';

interface EmailInputProps {
    onChange: (e: any) => any
}

export default function EmailInput() {
    return (
        <InputGroup>
            <InputLeftAddon children={'@'}/>
            <Input required={true} type='email' focusBorderColor='red.300' placeholder='Enter Email Address'/>
        </InputGroup>);
}


