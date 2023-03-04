"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var React = require("react");
var NavBar_1 = require("./Props-TypeScript/NavBar");
function Edit_Info() {
    return (<>
            <NavBar_1.default mode={''}/>

            <react_1.Container maxW='container.xl'>
                <react_1.Flex>
                    <react_1.SimpleGrid columnGap={3} rowGap={6}>

                        <react_1.FormControl>

                            <react_1.GridItem colSpan={2}>
                                <react_1.FormLabel>Email address</react_1.FormLabel>
                                <react_1.Input type='email'/>
                            </react_1.GridItem>
                            <react_1.GridItem colSpan={2}>
                                <react_1.FormLabel>Email address</react_1.FormLabel>
                                <react_1.Input type='email'/>
                            </react_1.GridItem>


                        </react_1.FormControl>
                    </react_1.SimpleGrid>

                </react_1.Flex>
            </react_1.Container>

        </>);
}
exports.default = Edit_Info;
