"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var NavBar_1 = require("./Props-TypeScript/NavBar");
var Cookie_1 = require("./Props-TypeScript/Cookie");
var SideDrawer_1 = require("./Props-TypeScript/SideDrawer");
var react_1 = require("@chakra-ui/react");
var MainPage = function () {
    var url = 'http://localhost:3000/api/user';
    var name = (0, Cookie_1.default)(url).name;
    var bgColor = (0, react_1.useColorModeValue)('gray.50', 'whiteAlpha.50');
    return (<>
            <NavBar_1.default name={name}/>
            <SideDrawer_1.default></SideDrawer_1.default>

            <react_1.Container maxW='container.xl' p={5}>
                <react_1.Wrap spacing={10}>
                    <react_1.WrapItem>
                        <react_1.Card bg={bgColor} p={10}>
                            <react_1.Heading>Welcome Back</react_1.Heading>
                            <react_1.Text py={5}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</react_1.Text>
                        </react_1.Card>
                    </react_1.WrapItem>
                    <react_1.WrapItem>

                        <react_1.Card bg={bgColor} p={10}>
                            <react_1.Heading>Whats new</react_1.Heading>
                            <react_1.Text py={5}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</react_1.Text>
                        </react_1.Card>
                    </react_1.WrapItem>

                </react_1.Wrap>

            </react_1.Container>

        </>);
};
exports.default = MainPage;
