"use strict";
// Email Input React Component
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var React = require("react");
function EmailInput() {
    return (<react_1.InputGroup>
            <react_1.InputLeftAddon children={'@'}/>
            <react_1.Input required={true} type='email' focusBorderColor='red.300' placeholder='Enter Email Address'/>
        </react_1.InputGroup>);
}
exports.default = EmailInput;
