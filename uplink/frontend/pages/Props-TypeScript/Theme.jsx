"use strict";
// Custom Theme Component
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var Theme = (0, react_1.extendTheme)({
    colors: {
        brand: {
            50: '#4FED86',
            100: '#48E091',
            200: '#40D29B',
            300: '#39C5A6',
            400: '#31B8B1',
            500: '#2AAABB',
            600: '#229DC6',
            700: '#1B90D1',
            800: '#1382DB',
            900: '#0C75E6',
        },
    },
    fonts: {
        heading: "Montserrat ,".concat((_a = react_1.theme.fonts) === null || _a === void 0 ? void 0 : _a.heading, " "),
        body: "Tilt Neon ,".concat((_b = react_1.theme.fonts) === null || _b === void 0 ? void 0 : _b.heading, " "),
    },
});
exports.default = Theme;
