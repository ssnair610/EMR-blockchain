// Error-404 React Component


import {Box, Image} from '@chakra-ui/react'
import * as React from 'react'


export default function Error_404() {

    return (
        <>
            <Box
                boxSize='xl'>
                <Image
                    align="center"
                    src={'./images/error_404.png'}
                    alt='Dan Abramov'/>
            </Box>
        </>
    );

}


