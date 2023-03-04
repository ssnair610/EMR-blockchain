"use strict";
// Login Page React Component
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var React = require("react");
var all_1 = require("react-icons/all");
var EmailInput_1 = require("./Props-TypeScript/EmailInput");
var PasswordInput_1 = require("./Props-TypeScript/PasswordInput");
var Footer_1 = require("./Props-TypeScript/Footer");
var NavBar_1 = require("./Props-TypeScript/NavBar");
function ButtonCustom() {
    // Need to add isLoading when the button is pressed .
    return (<react_1.Button type={"submit"} size='md' w='full' colorScheme='brand'>Login</react_1.Button>);
}
function Login() {
    var bgColor = (0, react_1.useColorModeValue)('gray.50', 'whiteAlpha.50');
    return (<>
            <NavBar_1["default"] />
            <react_1.Container maxW='container.xl'>
                <react_1.Flex>
                    <react_1.Container maxW='container.xl' centerContent py={55}>
                        <react_1.Flex>
                            <react_1.Card bg={bgColor} p={25}>
                                <react_1.Card p={3}>
                                    <react_1.VStack spacing={4}>
                                        <react_1.Heading mb={4}>Login</react_1.Heading>
                                        <react_1.FormControl>
                                            <EmailInput_1["default"] />
                                            <PasswordInput_1["default"] placeHolder='Enter your Password'/>
                                            <react_1.Text fontSize='xl'>Dont have a account , then <react_1.Link href='/ signUp'>sign
                                                up!!</react_1.Link></react_1.Text>
                                            <ButtonCustom />
                                        </react_1.FormControl>
                                        <react_1.Divider />
                                        <react_1.Text>Or</react_1.Text>
                                        <react_1.HStack>
                                            <react_1.Button colorScheme='facebook' leftIcon={<all_1.FaFacebook />}>
                                                Facebook
                                            </react_1.Button>
                                            <react_1.Button color={'#4285F4'} leftIcon={<all_1.FaGoogle />}>
                                                Google
                                            </react_1.Button>
                                            <react_1.Button color={'#6cc644'} leftIcon={<all_1.FaGithub />}>
                                                Github
                                            </react_1.Button>
                                        </react_1.HStack>
                                    </react_1.VStack>
                                </react_1.Card>
                            </react_1.Card>

                        </react_1.Flex>
                    </react_1.Container>
                </react_1.Flex>
            </react_1.Container>
            <Footer_1["default"] />
        </>);
}
exports["default"] = Login;
