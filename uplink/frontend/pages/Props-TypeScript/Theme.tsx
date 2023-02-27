// Custom Theme Component

import {extendTheme, theme as base} from '@chakra-ui/react';
import * as React from 'react';

const Theme = extendTheme({

    colors: {
        brand: {
            50: '#4FED86',
            100: '#48E091',
            200: '#40D29B',
            300: '#39C5A6',
            400: '#31B8B1',
            500: '#2AAABB',
            600: '#229DC6',
            700: '#1B90D1',
            800: '#1382DB',
            900: '#0C75E6',
        },
    },

    fonts: {
        heading: `Montserrat ,${base.fonts?.heading} `,
        body: `Tilt Neon ,${base.fonts?.heading} `,
    },


});


export default Theme;