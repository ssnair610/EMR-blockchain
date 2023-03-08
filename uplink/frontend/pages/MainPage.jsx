"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var NavBar_1 = require("./Props-TypeScript/NavBar");
var Cookie_1 = require("./Props-TypeScript/Cookie");
var SideDrawer_1 = require("./Props-TypeScript/SideDrawer");
var MainPage = function () {
    var url = 'http://localhost:3000/api/user';
    var name = (0, Cookie_1.default)(url).name;
    return (<>
            <NavBar_1.default name={name}/>
            <SideDrawer_1.default></SideDrawer_1.default>

        </>);
};
exports.default = MainPage;
