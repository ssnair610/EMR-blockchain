import * as React from 'react';
import {
    Avatar,
    Button,
    ButtonGroup,
    Container,
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    GridItem,
    Heading,
    IconButton,
    Link,
    SimpleGrid,
    useDisclosure,
    WrapItem
} from "@chakra-ui/react";
import {ArrowRightIcon} from '@chakra-ui/icons';
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

const SideDrawer = (props: { mode: string }) => {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef()
    let gridButton

    if (props.mode === "doc") {
        gridButton = (
            <>
                <GridItem colSpan={1}>
                    <Link href={'/docMainPage'} style={{textDecoration: 'none'}}><Button size='lg'
                                                                                         w='full'>Home</Button></Link>
                </GridItem>


                {/*<GridItem colSpan={1}>*/}
                {/*    <Link href={'/upLoadData'} style={{textDecoration: 'none'}}><Button size='lg' w='full'>Upload*/}
                {/*        Data</Button></Link>*/}
                {/*</GridItem>*/}


                <GridItem colSpan={1}>
                    <Link href={'/docProfile'} style={{textDecoration: 'none'}}><Button size='lg'
                                                                                        w='full'>Profile</Button></Link>
                </GridItem>


                <GridItem colSpan={1}>
                    <Link href={'/docSettings'} style={{textDecoration: 'none'}}><Button size='lg'
                                                                                         w='full'>Settings</Button></Link>
                </GridItem>
            </>

        )

    }
    else if (props.mode === 'patient') {
        gridButton = (
            <>
                <GridItem colSpan={1}>
                    <Link href={'/mainPage'} style={{textDecoration: 'none'}}><Button size='lg'
                                                                                      w='full'>Home</Button></Link>
                </GridItem>


                <GridItem colSpan={1}>
                    <Link href={'/upLoadData'} style={{textDecoration: 'none'}}><Button size='lg' w='full'>Upload
                        Data</Button></Link>
                </GridItem>


                <GridItem colSpan={1}>
                    <Link href={'/medicalHistory'} style={{textDecoration: 'none'}}><Button size='lg'
                                                                                     w='full'>Medical History</Button></Link>
                </GridItem>


                <GridItem colSpan={1}>
                    <Link href={'/settings'} style={{textDecoration: 'none'}}><Button size='lg'
                                                                                      w='full'>Settings</Button></Link>
                </GridItem>
            </>

        )

    }


    return (
        <>

            <Button ref={btnRef} onClick={onOpen}>
                <ArrowRightIcon/>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <Container centerContent p={5}>
                        <DrawerHeader><Heading>Virtualica</Heading></DrawerHeader>

                        <WrapItem>
                            <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast'/>
                        </WrapItem>

                    </Container>

                    <Divider/>

                    <DrawerBody>
                        <Container maxW='container.xl' centerContent py={5} px={5}>
                            <SimpleGrid spacing={10} p={5} columns={1} w='full'>

                                {gridButton}

                            </SimpleGrid>

                        </Container>

                    </DrawerBody>

                    <DrawerFooter>
                        <Container centerContent>
                            <ButtonGroup variant='ghost'>
                                <IconButton
                                    as='a'
                                    href='#'
                                    aria-label='LinkedIn'
                                    icon={<FaLinkedin fontSize='1.25rem'/>}
                                />
                                <IconButton as='a' href='#' aria-label='GitHub' icon={<FaGithub fontSize='1.25rem'/>}/>
                                <IconButton
                                    as='a'
                                    href='#'
                                    aria-label='Twitter'
                                    icon={<FaTwitter fontSize='1.25rem'/>}
                                />
                            </ButtonGroup>
                        </Container>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>


        </>
    );
};

export default SideDrawer;