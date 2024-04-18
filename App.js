import React from "react";
import ReactDOM  from "react-dom/client";


const TitleComponent = () => (
    <h1>hello it is me</h1>
);
const title = (
    <h1>
        Hello title
    </h1>
)
const number = 1000;

// React functional Components
const HeadingComponent = () => (
    <div className="container">
        <TitleComponent />
        <h2>{number}</h2>
        <h2>{title}</h2>
        <h1 classNmae="heading">Namaste functional component</h1>
    </div>
);
// const HeadingComponent = () => { return <h1 classNmae="heading">Namaste functional component</h1> }

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<HeadingComponent />); // Syntax to babel to understand this is a functional Component