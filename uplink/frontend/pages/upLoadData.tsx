import * as React from 'react';
import {
    AspectRatio,
    Box,
    BoxProps,
    Card,
    Container,
    Divider,
    forwardRef,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import {motion, useAnimation} from "framer-motion";
import SideDrawer from "./Props-TypeScript/SideDrawer";
import NavBar from './Props-TypeScript/NavBar';
import Cookie from "./Props-TypeScript/Cookie";


const first = {
    rest: {
        rotate: "-15deg",
        scale: 1.2,
        x: "-50%",
        filter: "grayscale(80%)",
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        x: "-70%",
        scale: 1.6,
        rotate: "-20deg",
        filter: "grayscale(0%)",
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
};

const second = {
    rest: {
        rotate: "15deg",
        scale: 1.2,
        x: "50%",
        filter: "grayscale(80%)",
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        x: "70%",
        scale: 1.6,
        rotate: "20deg",
        filter: "grayscale(0%)",
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
};

const third = {
    rest: {
        scale: 1.2,
        filter: "grayscale(80%)",
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        scale: 1.6,
        filter: "grayscale(0%)",
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
};

const PreviewImage = forwardRef<BoxProps, typeof Box>((props, ref) => {
    return (
        <Box
            bg="white"
            top="0"
            height="100%"
            width="100%"
            position="absolute"
            borderWidth="1px"
            borderStyle="solid"
            rounded="sm"
            borderColor="gray.400"
            as={motion.div}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
            {...props}
            ref={ref}
        />
    );
});

export default function upLoadData() {

    const url = 'http://localhost:3000/api/user'
    let {name: name} = Cookie(url);
    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');

    const controls = useAnimation();
    const startAnimation = () => controls.start("hover");
    const stopAnimation = () => controls.stop();
    return (
        <>
            <NavBar name={name}/>
            <SideDrawer/>

            <Container maxW='container.lg' w='full' p={5} centerContent>
                <Card bg={bgColor} w='full' p={5}>

                    <Heading p={5}>Upload your Data</Heading>
                    <Divider/>
                    <Container maxW='container.xl' my="7" w='full' centerContent>
                        <AspectRatio h="64" width="full" ratio={1}>
                            <Box
                                borderColor="teal"
                                borderStyle="dashed"
                                borderWidth="2px"
                                rounded="md"
                                shadow="sm"
                                role="group"
                                transition="all 150ms ease-in-out"
                                _hover={{
                                    shadow: "md"
                                }}
                                as={motion.div}
                                initial="rest"
                                animate="rest"
                                whileHover="hover"
                            >
                                <Box position="relative" height="100%" width="100%">
                                    <Box
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        height="100%"
                                        width="100%"
                                        display="flex"
                                        flexDirection="column"
                                    >
                                        <Stack
                                            height="100%"
                                            width="100%"
                                            display="flex"
                                            alignItems="center"
                                            justify="center"
                                            spacing="3"
                                        >
                                            <Box height="16" width="12" position="relative" >
                                                <PreviewImage
                                                    variants={first}
                                                    backgroundImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Normal_posteroanterior_%28PA%29_chest_radiograph_%28X-ray%29.jpg/1200px-Normal_posteroanterior_%28PA%29_chest_radiograph_%28X-ray%29.jpg')"
                                                />
                                                <PreviewImage
                                                    variants={second}
                                                    backgroundImage="url('https://logos-world.net/wp-content/uploads/2020/03/Microsoft-Word-Logo.png')"
                                                />
                                                <PreviewImage
                                                    variants={third}
                                                    backgroundImage={`url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png")`}
                                                />
                                            </Box>
                                            <Stack p="8" textAlign="center" spacing="1"  mx={7}>
                                                <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                                                    Drop your files here
                                                </Heading>
                                                <Text fontWeight="light">or click to upload</Text>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                    <Input
                                        type="file"
                                        height="100%"
                                        width="100%"
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        opacity="0"
                                        aria-hidden="true"
                                        // accept="/*"
                                        onDragEnter={startAnimation}
                                        onDragLeave={stopAnimation}
                                    />
                                </Box>
                            </Box>
                        </AspectRatio>
                    </Container>
                </Card>
            </Container>

        </>
    );
}
