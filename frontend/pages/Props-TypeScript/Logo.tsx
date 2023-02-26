// Logo React Component

import * as React from 'react';
import {Image, keyframes, usePrefersReducedMotion} from '@chakra-ui/react';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = props => {
    const prefersReducedMotion = usePrefersReducedMotion();

    const animation = prefersReducedMotion
        ? undefined
        : `${spin} infinite 20s linear`;

    return <Image animation={animation} boxSize='50px' borderRadius='full'
                  src={'https://www.freepnglogos.com/uploads/medicine-logo-png-1.png'} {...props} />;
};

