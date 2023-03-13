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
var react_1 = require("@chakra-ui/react");
var React = require("react");
var react_2 = require("react");
var NavBar_1 = require("../Props-TypeScript/NavBar");
var Cookie_1 = require("../Props-TypeScript/Cookie");
var SideDrawer_1 = require("../Props-TypeScript/SideDrawer");
function UserProfile() {
    var _this = this;
    var url = 'http://localhost:3000/api/getUserDetails';
    var _a = (0, Cookie_1.default)(url), name = _a.name, email = _a.email, address = _a.address, phoneNumber = _a.phoneNumber, doctorsName = _a.doctorsName, medication = _a.medication, ailments = _a.ailments, patientStatus = _a.patientStatus, gender = _a.gender, age = _a.age;
    var _b = (0, react_2.useState)(''), Name = _b[0], setName = _b[1], _c = (0, react_2.useState)(''), Address = _c[0], setAddress = _c[1], _d = (0, react_2.useState)(''), PhoneNumber = _d[0], setPhoneNumber = _d[1], _e = (0, react_2.useState)(''), DoctorsName = _e[0], setDoctorsName = _e[1], _f = (0, react_2.useState)(''), Medication = _f[0], setMedication = _f[1], _g = (0, react_2.useState)(''), Ailments = _g[0], setAilments = _g[1], _h = (0, react_2.useState)(''), PatientStatus = _h[0], setPatientStatus = _h[1], _j = (0, react_2.useState)(''), Gender = _j[0], setGender = _j[1], _k = (0, react_2.useState)(''), Age = _k[0], setAge = _k[1], toast = (0, react_1.useToast)();
    var Toast;
    var _l = (0, react_2.useState)(true), inputDisabled = _l[0], isInputDisabled = _l[1];
    var _m = (0, react_2.useState)('Update details'), buttonData = _m[0], setButtonData = _m[1];
    var bgColor = (0, react_1.useColorModeValue)('gray.200', 'gray.700');
    var updateDetails = function () {
        if (inputDisabled === true) {
            isInputDisabled(false);
            setButtonData('Submit');
        }
        else {
            isInputDisabled(true);
            setButtonData('Update details');
        }
    };
    var submit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!(inputDisabled === true)) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch('http://localhost:3000/api/updateUserDetails', {
                            body: JSON.stringify({
                                Name: Name,
                                Age: Age,
                                PhoneNumber: PhoneNumber,
                                DoctorsName: DoctorsName,
                                Ailments: Ailments,
                                Medication: Medication,
                                Address: Address,
                                PatientStatus: PatientStatus,
                                Gender: Gender,
                            }),
                            // credentials: 'include',
                            headers: { 'Content-Type': 'application/json' },
                            method: 'POST'
                        })];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    //
                    if (response.status === 200) {
                        Toast = (toast({
                            title: 'Everything worked',
                            description: 'Account Details are updated',
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                        }));
                    }
                    else if (response.status === 400) {
                        Toast = (toast({
                            title: 'Error',
                            description: 'Something went wrong , please try again later.',
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        }));
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (<>
            <NavBar_1.default name={'name'}/>
            <SideDrawer_1.default></SideDrawer_1.default>
            <react_1.Container maxW='container.xl' px={5} py={2}>
                <react_1.Container maxW='container.lg' py={35} px={100}>
                    <react_1.Card bg={bgColor} p={15}>

                        <react_1.Wrap spacing={5}>

                            <react_1.WrapItem>


                                <react_1.Box maxW='full'>
                                    <react_1.Heading mb={4}>Update your profile</react_1.Heading>
                                    <react_1.Text fontSize='lg'>
                                        Keep your profile up to date so your doctors can get to know more about your
                                        ailments
                                        and help you out even faster.
                                    </react_1.Text>
                                </react_1.Box>

                            </react_1.WrapItem>


                            <react_1.Divider w={'full'}/>


                            <react_1.WrapItem>

                                <react_1.SimpleGrid spacing={3} columns={2} columnGap={45}>
                                    <react_1.GridItem colSpan={1}>
                                        <react_1.Flex>
                                            <form onSubmit={submit}>
                                                <react_1.FormControl isDisabled={inputDisabled}>
                                                    <react_1.SimpleGrid p={2} columnGap={100} rowGap={5} columns={2}>

                                                        <react_1.GridItem colSpan={1}>
                                                            <react_1.FormLabel>Name</react_1.FormLabel>
                                                            <react_1.Input type='text' defaultValue={name} w='auto' onChange={function (e) { return setName(e.target.value); }}/>
                                                        </react_1.GridItem>
                                                        <react_1.GridItem colSpan={1}>
                                                            <react_1.FormLabel>Email address</react_1.FormLabel>
                                                            <react_1.Input type='email' defaultValue={email} w='auto'/>
                                                        </react_1.GridItem>

                                                        <react_1.GridItem colSpan={1}>
                                                            <react_1.FormLabel>Age</react_1.FormLabel>
                                                            <react_1.Input type='number' defaultValue={age} w='auto' onChange={function (e) { return setAge(e.target.value); }}/>
                                                        </react_1.GridItem>

                                                        <react_1.GridItem colSpan={1}>
                                                            <react_1.FormLabel>Phone Number</react_1.FormLabel>
                                                            <react_1.Input type='text' defaultValue={phoneNumber} w='auto' onChange={function (e) { return setPhoneNumber(e.target.value); }}/>
                                                        </react_1.GridItem>

                                                        <react_1.GridItem colSpan={1}>
                                                            <react_1.FormLabel>Gender</react_1.FormLabel>
                                                            <react_1.Input type='text' defaultValue={gender} w='auto' onChange={function (e) { return setGender(e.target.value); }}/>
                                                        </react_1.GridItem>

                                                        <react_1.GridItem colSpan={1}>
                                                            <react_1.FormLabel>Doctor's Name</react_1.FormLabel>
                                                            <react_1.Input type='text' defaultValue={doctorsName} w='auto' onChange={function (e) { return setDoctorsName(e.target.value); }}/>
                                                        </react_1.GridItem>

                                                        <react_1.GridItem colSpan={1}>
                                                            <react_1.FormLabel>Ailments</react_1.FormLabel>
                                                            <react_1.Input type='text' defaultValue={ailments} w='auto' onChange={function (e) { return setAilments(e.target.value); }}/>
                                                        </react_1.GridItem>

                                                        <react_1.GridItem colSpan={1}>
                                                            <react_1.FormLabel>Medications</react_1.FormLabel>
                                                            <react_1.Input type='text' defaultValue={medication} w='auto' onChange={function (e) { return setMedication(e.target.value); }}/>
                                                        </react_1.GridItem>

                                                        <react_1.GridItem colSpan={1}>
                                                            <react_1.FormLabel>Address</react_1.FormLabel>
                                                            <react_1.Input type='text' defaultValue={address} w='auto' onChange={function (e) { return setAddress(e.target.value); }}/>
                                                        </react_1.GridItem>

                                                        <react_1.GridItem colSpan={1}>
                                                            <react_1.FormLabel>Status</react_1.FormLabel>
                                                            <react_1.Select>
                                                                <option>Alive</option>
                                                                <option>Dead 💀</option>
                                                            </react_1.Select>
                                                        </react_1.GridItem>


                                                        <react_1.GridItem colSpan={1}>
                                                            <react_1.Button size='md' w='full' colorScheme='brand' type='submit' onClick={updateDetails}> {buttonData} </react_1.Button>
                                                        </react_1.GridItem>


                                                    </react_1.SimpleGrid>
                                                </react_1.FormControl>
                                            </form>

                                        </react_1.Flex>
                                    </react_1.GridItem>


                                    <react_1.GridItem colSpan={1}>
                                        <react_1.Container maxW='container.xl' px={180}>
                                            <react_1.Flex>


                                                <react_1.VStack align={'center'}>

                                                    <react_1.WrapItem>
                                                        <react_1.Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast'/>{' '}
                                                    </react_1.WrapItem>
                                                    <react_1.Text>{name}</react_1.Text>
                                                    <react_1.Text>{email}</react_1.Text>
                                                    <react_1.Text>{phoneNumber}</react_1.Text>
                                                    <react_1.Divider orientation='horizontal' w={100}/>
                                                    <react_1.Button py={4} size='md' w='full' colorScheme='brand'>
                                                        Generate Report
                                                    </react_1.Button>

                                                </react_1.VStack>
                                            </react_1.Flex>
                                        </react_1.Container>


                                    </react_1.GridItem>
                                </react_1.SimpleGrid>
                            </react_1.WrapItem>


                        </react_1.Wrap>
                    </react_1.Card>

                </react_1.Container>
            </react_1.Container>

        </>);
}
exports.default = UserProfile;
