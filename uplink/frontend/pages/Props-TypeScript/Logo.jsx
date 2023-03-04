"use strict";
// Logo React Component
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = void 0;
var React = require("react");
var react_1 = require("@chakra-ui/react");
var spin = (0, react_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n\u014D"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n\u014D"])));
var Logo = function (props) {
    var prefersReducedMotion = (0, react_1.usePrefersReducedMotion)();
    var animation = prefersReducedMotion
        ? undefined
        : "".concat(spin, " infinite 20s linear");
    return <react_1.Image animation={animation} boxSize='50px' borderRadius='full' src={'https://www.freepnglogos.com/uploads/medicine-logo-png-1.png'} {...props}/>;
};
exports.Logo = Logo;
var templateObject_1;
