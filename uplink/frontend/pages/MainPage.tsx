import * as React from 'react';
import NavBar from "./Props-TypeScript/NavBar";
import Cookie from "./Props-TypeScript/Cookie";
import SideDrawer from "./Props-TypeScript/SideDrawer";



const MainPage = () => {

    const url = 'http://localhost:3000/api/user'
    let {name: name} = Cookie(url);

    return (
        <>
            <NavBar name={name}/>
            <SideDrawer></SideDrawer>

        </>
    )
        ;
};

export default MainPage;