// Home Page React Component

import { Heading } from "@chakra-ui/react";
import * as React from "react";
import NavBar from "../Props-TypeScript/NavBar";

export default function Home() {
    return (
        <>

            <NavBar mode='patient' name={''}/>
            <Heading>Hello</Heading>

        </>

    );
}

