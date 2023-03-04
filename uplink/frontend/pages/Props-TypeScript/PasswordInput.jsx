"use strict";
// Password React Component
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@chakra-ui/react");
function PasswordInput(props) {
    var _a = React.useState(false), show = _a[0], setShow = _a[1];
    var handleClick = function () { return setShow(!show); };
    return (<react_1.InputGroup size='md'>
            <react_1.Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder={props.placeHolder} focusBorderColor='red.300' required={true}/>
            <react_1.InputRightElement width='4.5rem'>
                <react_1.Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                </react_1.Button>
            </react_1.InputRightElement>
        </react_1.InputGroup>);
}
exports.default = PasswordInput;
