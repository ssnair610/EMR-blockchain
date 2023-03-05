"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var NavBar_1 = require("./Props-TypeScript/NavBar");
var cookie_1 = require("./Props-TypeScript/cookie");
var MainPage = function () {
    var url = 'http://localhost:3000/api/user';
    var name = (0, cookie_1.default)(url).name;
    return (<>
            <NavBar_1.default name={name}/>

            <div>
                {name ? "Hi" + name : "You are not logged in !!"}
            </div>

        </>);
};
exports.default = MainPage;
