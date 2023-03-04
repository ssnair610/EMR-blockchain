// Main script file which will be rendered when it's called by its tmpl/html file
import * as React from "react";
import * as  ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#application")!);
root.render(
    <>
        <App/>
    </>
);
