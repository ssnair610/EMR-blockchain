"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@chakra-ui/react");
var DrawerProp = function () {
    var _a = (0, react_1.useDisclosure)(), isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;
    var btnRef = React.useRef();
    return (<>
            <react_1.Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </react_1.Button>
            <react_1.Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
                <react_1.DrawerOverlay />
                <react_1.DrawerContent>
                    <react_1.DrawerCloseButton />
                    <react_1.DrawerHeader>Create your account</react_1.DrawerHeader>

                    <react_1.DrawerBody>
                        <react_1.Input placeholder='Type here...'/>
                    </react_1.DrawerBody>

                    <react_1.DrawerFooter>
                        <react_1.Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </react_1.Button>
                        <react_1.Button colorScheme='blue'>Save</react_1.Button>
                    </react_1.DrawerFooter>
                </react_1.DrawerContent>
            </react_1.Drawer>
        </>);
};
exports.default = DrawerProp;
