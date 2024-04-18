import React from "react";
import ReactDOM  from "react-dom";

const heading = React.createElement("h1",{id:"heading"},"Hello world from react !!"); // core thing of react script1 , {} to give attributes to tag like id: "heading"

// 1st arg -html tag, 2nd arg- attributes, 3rd children || content
const parent = React.createElement("div", {id:"parent"}, [
            React.createElement( "div",{id:"child"},
                [
                    React.createElement ("h1",{},"Hello i am the child inner"),
                    React.createElement ("h2",{},"Hello i am the other child inner")

                ]),
            React.createElement( "div",{id:"child2"},
                [
                    React.createElement ("h1",{},"Hello i am the child inner2"),
                    React.createElement ("h2",{},"Hello i am the other child inner2")

                ])
]);

console.log(parent); // React element object, which becomes the html on browser in render method

const root = ReactDOM.createRoot(document.getElementById("root")) ; // core thing of react script2
root.render(parent); // putting heading inside root // Replaces all the already existing content present inside the root with render argument