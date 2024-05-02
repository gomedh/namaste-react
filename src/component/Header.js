import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // used to navigate to other pages without reloading the page.
import useOnlineStatus from "../utils/useOnlineStatus";


const HeaderComponent = () => {

// *********************************** -- All local State Variables -- *************************************************************

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

// *********************************** -- All the Methods -- *************************************************************

    buttonName = () => {
        btnName === 'Login'?setBtnName("Logout"): setBtnName("Login");
    }

    // if no dependency array is passed then it will be called everytime the component is rendered.
    // if dependecy array is empty then it will be called on initial render.
    // if dependency array is [btnName] then it will be called only when btnName changes.

    // useEffect(() => {
    //     console.log("Header component is rendered");
    // });

// *********************************** -- JSX retrun -- *************************************************************
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/"> 
                    <img className="logo" src= {LOGO_URL}></img>
                </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}  </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact us </Link></li>
                    <li><Link to="/grocery">Grocery </Link></li>
                    <button className="login-btn" 
                    onClick={buttonName}>
                        {btnName}
                    </button> 
                </ul>
            </div>
        </div>
    )
};

// *********************************** -- Module Export -- *************************************************************
export default HeaderComponent;