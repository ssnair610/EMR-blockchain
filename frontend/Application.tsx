// Main script file which will be rendered when it's called by its tmpl/html file

import * as React from "react";
import * as  ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Error_404 from "./pages/Error_404";
import {ChakraProvider} from '@chakra-ui/react'
import Theme from "./pages/Props-TypeScript/Theme";

const root = ReactDOM.createRoot(document.querySelector("#application")!);
root.render(
    <ChakraProvider theme={Theme}>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/error_404" element={<Error_404/>}/>
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
);
