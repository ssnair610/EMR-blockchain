// Password React Component


import * as React from 'react';
import {Button, Input, InputGroup, InputRightElement} from '@chakra-ui/react';

export default function PasswordInput(props) {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
        <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder={props.placeHolder}
                focusBorderColor='red.300'
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
        </InputGroup>
    );
}


