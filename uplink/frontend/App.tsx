import *as  React from 'react'
import {ChakraProvider} from "@chakra-ui/react";
import Theme from "./pages/Props-TypeScript/Theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Error_404 from "./pages/Error_404";
import UserProfile from "./pages/UserProfile";
import MainPage from "./pages/MainPage";
import Footer from "./pages/Props-TypeScript/Footer";

const App = () => {


    return (
        <>


            <ChakraProvider theme={Theme}>
                <BrowserRouter>

                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signUp" element={<SignUp/>}/>
                        <Route path="/error_404" element={<Error_404/>}/>
                        <Route path="/mainPage" element={<MainPage/>}/>
                        <Route path="/profile" element={<UserProfile/>}/>
                    </Routes>

                    <Footer/>
                </BrowserRouter>
            </ChakraProvider>

        </>
    );
};

export default App;