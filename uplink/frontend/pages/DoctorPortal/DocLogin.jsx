"use strict";
/*

Author : Pranav
Data of Creation : 11-03-2023
Project Name : tempo
IDE : IntelliJ IDEA

*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var React = require("react");
var react_2 = require("react");
var react_router_dom_1 = require("react-router-dom");
var NavBar_1 = require("../Props-TypeScript/NavBar");
var all_1 = require("react-icons/all");
var DocLogin = function () {
    var bgColor = (0, react_1.useColorModeValue)('gray.50', 'whiteAlpha.50'), toast = (0, react_1.useToast)(), navigate = (0, react_router_dom_1.useNavigate)(), _a = (0, react_2.useState)(''), Email = _a[0], setEmail = _a[1], _b = (0, react_2.useState)(''), Password = _b[0], setPassword = _b[1], _c = React.useState(false), show = _c[0], setShow = _c[1], handleClick = function () { return setShow(!show); };
    var Toast;
    var submit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    return [4 /*yield*/, fetch('http://localhost:3000/api/docLogin', {
                            body: JSON.stringify({
                                Email: Email,
                                Password: Password
                            }),
                            credentials: 'include',
                            headers: { 'Content-Type': 'application/json' },
                            method: 'POST'
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status === 202) {
                        Toast = (toast({
                            title: 'Successfully Logged In',
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                        }));
                        return [2 /*return*/, navigate("/docMainPage")];
                    }
                    else if (response.status === 400) {
                        Toast = (toast({
                            title: 'Error',
                            description: 'Email or Password is incorrect!',
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        }));
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (<>
            <NavBar_1.default name={''}/>
            <react_1.Container maxW='container.xl'>
                <react_1.Flex>
                    <react_1.Container maxW='container.xl' centerContent py={55}>
                        <react_1.Flex>
                            <react_1.Card bg={bgColor} p={25}>
                                <react_1.Card p={3}>
                                    <react_1.VStack spacing={4}>
                                        <react_1.Heading mb={4}>Doc Login</react_1.Heading>
                                        <form onSubmit={submit}>
                                            <react_1.VStack w='full' h='full' spacing={4} px={2} alignItems='flex-start'>

                                                <react_1.InputGroup>
                                                    <react_1.InputLeftAddon children={'@'}/>
                                                    <react_1.Input type='email' focusBorderColor='red.300' placeholder='Enter Email Address' onChange={function (e) { return setEmail(e.target.value); }}/>
                                                </react_1.InputGroup>
                                                <react_1.InputGroup size='md'>
                                                    <react_1.Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder="Enter your password" focusBorderColor='red.300' onChange={function (e) { return setPassword(e.target.value); }}/>
                                                    <react_1.InputRightElement width='4.5rem'>
                                                        <react_1.Button h='1.75rem' size='sm' onClick={handleClick}>
                                                            {show ? 'Hide' : 'Show'}
                                                        </react_1.Button>
                                                    </react_1.InputRightElement>
                                                </react_1.InputGroup>
                                                {/*<PasswordInput placeHolder='Confirm your Password'/>*/}
                                                <react_1.Button size='md' w='full' colorScheme='brand' type='submit'> Login
                                                </react_1.Button>
                                                <react_1.Link href='/docSignUp'><react_1.Text>Dont have a account , click here to sign up!!</react_1.Text></react_1.Link>
                                                <react_1.Divider />
                                            </react_1.VStack>
                                        </form>
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
        </>);
};
exports.default = DocLogin;
