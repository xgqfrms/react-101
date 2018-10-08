"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 *
 * @description
 * @augments
 * @example
 *
 */

import React from "react";
import ReactDOM from "react-dom";

class MyName extends React.Component {
    // name property goes here:
    get name() {
        return "xgqfrms";
    }
    render() {
        return <h1>My name is {this.name}.</h1>;
    }
}

ReactDOM.render(
    <MyName />,
    document.getElementById("app")
);
