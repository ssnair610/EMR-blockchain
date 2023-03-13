"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@chakra-ui/react");
var Theme_1 = require("./pages/Props-TypeScript/Theme");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./pages/PatientPortal/Home");
var Login_1 = require("./pages/PatientPortal/Login");
var SignUp_1 = require("./pages/PatientPortal/SignUp");
// import Error_404 from "./pages/Error_404";
var UserProfile_1 = require("./pages/PatientPortal/UserProfile");
var MainPage_1 = require("./pages/PatientPortal/MainPage");
var Footer_1 = require("./pages/Props-TypeScript/Footer");
var Settings_1 = require("./pages/PatientPortal/Settings");
var upLoadData_1 = require("./pages/PatientPortal/upLoadData");
var DocLogin_1 = require("./pages/DoctorPortal/DocLogin");
var DocMainPage_1 = require("./pages/DoctorPortal/DocMainPage");
var DocSignUp_1 = require("./pages/DoctorPortal/DocSignUp");
var App = function () {
    return (<>


            <react_1.ChakraProvider theme={Theme_1.default}>
                <react_router_dom_1.BrowserRouter>

                    <react_router_dom_1.Routes>
                        <react_router_dom_1.Route index element={<Home_1.default />}/>
                        <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
                        <react_router_dom_1.Route path="/docLogin" element={<DocLogin_1.default />}/>
                        <react_router_dom_1.Route path="/signUp" element={<SignUp_1.default />}/>
                        <react_router_dom_1.Route path="/DocSignUp" element={<DocSignUp_1.default />}/>
                        {/*<Route path="/error_404" element={<Error_404/>}/>*/}
                        <react_router_dom_1.Route path="/mainPage" element={<MainPage_1.default />}/>
                        <react_router_dom_1.Route path="/docMainPage" element={<DocMainPage_1.default />}/>
                        <react_router_dom_1.Route path="/profile" element={<UserProfile_1.default />}/>
                        <react_router_dom_1.Route path="/upLoadData" element={<upLoadData_1.default />}/>
                        <react_router_dom_1.Route path="/settings" element={<Settings_1.default />}/>
                    </react_router_dom_1.Routes>

                    <Footer_1.default />
                </react_router_dom_1.BrowserRouter>
            </react_1.ChakraProvider>

        </>);
};
exports.default = App;
