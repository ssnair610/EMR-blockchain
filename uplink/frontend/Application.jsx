"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Main script file which will be rendered when it's called by its tmpl/html file
var React = require("react");
var ReactDOM = require("react-dom/client");
var App_1 = require("./App");
var root = ReactDOM.createRoot(document.querySelector("#application"));
root.render(<>
        <App_1.default />
    </>);
