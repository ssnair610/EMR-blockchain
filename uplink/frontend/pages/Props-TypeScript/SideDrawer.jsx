"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@chakra-ui/react");
var icons_1 = require("@chakra-ui/icons");
var fa_1 = require("react-icons/fa");
var SideDrawer = function () {
    var _a = (0, react_1.useDisclosure)(), isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;
    var btnRef = React.useRef();
    return (<>

            <react_1.Button ref={btnRef} onClick={onOpen}>
                <icons_1.ArrowRightIcon />
            </react_1.Button>
            <react_1.Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef}>
                <react_1.DrawerOverlay />
                <react_1.DrawerContent>
                    <react_1.DrawerCloseButton />
                    <react_1.Container centerContent p={5}>
                        <react_1.DrawerHeader><react_1.Heading>Virtualica</react_1.Heading></react_1.DrawerHeader>

                        <react_1.WrapItem>
                            <react_1.Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast'/>
                        </react_1.WrapItem>

                    </react_1.Container>

                    <react_1.Divider />

                    <react_1.DrawerBody>
                        <react_1.Container maxW='container.xl' centerContent py={5} px={5}>
                            <react_1.SimpleGrid spacing={10} p={5} columns={1} w='full'>

                                <react_1.GridItem colSpan={1}>
                                    <react_1.Link href={'/mainPage'} style={{ textDecoration: 'none' }}><react_1.Button size='lg' w='full'>Home</react_1.Button></react_1.Link>
                                </react_1.GridItem>

                                <react_1.GridItem colSpan={1}>
                                    <react_1.Link href={'/settings'} style={{ textDecoration: 'none' }}><react_1.Button size='lg' w='full'>Settings</react_1.Button></react_1.Link>
                                </react_1.GridItem>

                                <react_1.GridItem colSpan={1}>
                                    <react_1.Link href={'/profile'} style={{ textDecoration: 'none' }}><react_1.Button size='lg' w='full'>Profile</react_1.Button></react_1.Link>
                                </react_1.GridItem>

                                <react_1.GridItem colSpan={1}>
                                    <react_1.Link href={'/aboutUs'} style={{ textDecoration: 'none' }}><react_1.Button size='lg' w='full'>About
                                        Us</react_1.Button></react_1.Link>
                                </react_1.GridItem>


                            </react_1.SimpleGrid>

                        </react_1.Container>

                    </react_1.DrawerBody>

                    <react_1.DrawerFooter>
                        <react_1.Container centerContent>
                            <react_1.ButtonGroup variant='ghost'>
                                <react_1.IconButton as='a' href='#' aria-label='LinkedIn' icon={<fa_1.FaLinkedin fontSize='1.25rem'/>}/>
                                <react_1.IconButton as='a' href='#' aria-label='GitHub' icon={<fa_1.FaGithub fontSize='1.25rem'/>}/>
                                <react_1.IconButton as='a' href='#' aria-label='Twitter' icon={<fa_1.FaTwitter fontSize='1.25rem'/>}/>
                            </react_1.ButtonGroup>
                        </react_1.Container>
                    </react_1.DrawerFooter>
                </react_1.DrawerContent>
            </react_1.Drawer>


        </>);
};
exports.default = SideDrawer;
