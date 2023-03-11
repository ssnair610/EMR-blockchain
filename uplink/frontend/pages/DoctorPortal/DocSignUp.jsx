"use strict";
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
// Sign Up Page React Component
var react_1 = require("@chakra-ui/react");
var React = require("react");
var react_2 = require("react");
var NavBar_1 = require("../Props-TypeScript/NavBar");
var all_1 = require("react-icons/all");
var react_router_dom_1 = require("react-router-dom");
function Details() {
    var _this = this;
    var bgColor = (0, react_1.useColorModeValue)('gray.50', 'whiteAlpha.50');
    var _a = (0, react_2.useState)(''), Name = _a[0], setName = _a[1];
    var _b = (0, react_2.useState)(''), Email = _b[0], setEmail = _b[1];
    var _c = (0, react_2.useState)(''), Password = _c[0], setPassword = _c[1];
    var _d = React.useState(false), show = _d[0], setShow = _d[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var toast = (0, react_1.useToast)();
    var handleClick = function () { return setShow(!show); };
    var Toast;
    var submit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!(Name !== '' || Email !== '' || Password !== '')) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch('http://localhost:3000/api/DocRegeister', {
                            body: JSON.stringify({
                                Name: Name,
                                Email: Email,
                                Password: Password
                            }),
                            headers: { 'Content-Type': 'application/json' },
                            method: 'POST',
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status === 201) {
                        Toast = (toast({
                            title: 'Account created.',
                            description: "We've created your account for you.",
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                        }));
                        return [2 /*return*/, navigate("/login")];
                    }
                    else if (response.status === 500) {
                        Toast = (toast({
                            title: 'Internal Server Error',
                            description: 'Please try again!',
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        }));
                    }
                    return [3 /*break*/, 3];
                case 2:
                    Toast = (toast({
                        title: 'Error - Incomplete Data',
                        description: 'Please fill all the data!',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    }));
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (<>
            <NavBar_1.default name={''}/>

            <react_1.Container centerContent py={35}>
                <react_1.Card bg={bgColor} p={25}>
                    <react_1.Card py={4}>
                        <form onSubmit={submit}>

                            <react_1.VStack w='full' h='full' spacing={5} px={4} alignItems='flex-start'>
                                <react_1.Heading size='2xl'>Sign Up</react_1.Heading>
                                <react_1.Text>If you already have a account , then please click here to <react_1.Link>log
                                    in.</react_1.Link></react_1.Text>

                                <react_1.Input placeholder='Enter your Name' onChange={function (e) { return setName(e.target.value); }}/>
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
                                <react_1.Button size='md' w='full' colorScheme='brand' type='submit'>Sign Up!!</react_1.Button>
                                <react_1.Divider />
                            </react_1.VStack>
                        </form>

                        <react_1.Container centerContent py={1}>
                            <react_1.VStack>
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

                        </react_1.Container>

                    </react_1.Card>
                </react_1.Card>
            </react_1.Container>


        </>);
}
exports.default = Details;
