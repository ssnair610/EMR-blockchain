"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@chakra-ui/react");
var Theme_1 = require("./pages/Props-TypeScript/Theme");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./pages/Home");
var Login_1 = require("./pages/Login");
var SignUp_1 = require("./pages/SignUp");
var Error_404_1 = require("./pages/Error_404");
var UserProfile_1 = require("./pages/UserProfile");
var MainPage_1 = require("./pages/MainPage");
var Footer_1 = require("./pages/Props-TypeScript/Footer");
var App = function () {
    return (<>


            <react_1.ChakraProvider theme={Theme_1.default}>
                <react_router_dom_1.BrowserRouter>

                    <react_router_dom_1.Routes>
                        <react_router_dom_1.Route index element={<Home_1.default />}/>
                        <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
                        <react_router_dom_1.Route path="/signUp" element={<SignUp_1.default />}/>
                        <react_router_dom_1.Route path="/error_404" element={<Error_404_1.default />}/>
                        <react_router_dom_1.Route path="/mainPage" element={<MainPage_1.default />}/>
                        <react_router_dom_1.Route path="/profile" element={<UserProfile_1.default />}/>
                    </react_router_dom_1.Routes>

                    <Footer_1.default />
                </react_router_dom_1.BrowserRouter>
            </react_1.ChakraProvider>

        </>);
};
exports.default = App;
