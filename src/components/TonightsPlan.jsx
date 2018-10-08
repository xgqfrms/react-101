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

const fiftyFifty = Math.random() < 0.5;

class TonightsPlan extends React.Component {
    render() {
        let task;
        if (fiftyFifty) {
            task = "out WOOO";
        } else {
            task = "to bed WOOO";
        }
        return <h1>Tonight I'm going {task}</h1>;
    }
}

ReactDOM.render(
    <TonightsPlan />,
    document.getElementById("app")
);
