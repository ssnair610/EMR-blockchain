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

const SideDrawer = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef()


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

                                <GridItem colSpan={1}>
                                    <Link href={'/mainPage'} style={{textDecoration: 'none'}}><Button size='lg'
                                                                                                      w='full'>Home</Button></Link>
                                </GridItem>

                                <GridItem colSpan={1}>
                                    <Link href={'/settings'} style={{textDecoration: 'none'}}><Button size='lg'
                                                                                                      w='full'>Settings</Button></Link>
                                </GridItem>

                                <GridItem colSpan={1}>
                                    <Link href={'/profile'} style={{textDecoration: 'none'}}><Button size='lg'
                                                                                                     w='full'>Profile</Button></Link>
                                </GridItem>

                                <GridItem colSpan={1}>
                                    <Link href={'/aboutUs'} style={{textDecoration: 'none'}}><Button size='lg' w='full'>About
                                        Us</Button></Link>
                                </GridItem>


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