import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
const HeaderComponent = () => {

    const [btnName, setBtnName] = useState("Login");

    buttonName = () => {
        btnName === 'Login'?setBtnName("Logout"): setBtnName("Login");
    }

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login-btn" 
                    onClick={buttonName}>
                        {btnName}
                    </button> 
                </ul>
            </div>
        </div>
    )
};

export default HeaderComponent;