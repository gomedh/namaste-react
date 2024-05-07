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
        <div className="flex justify-between item-center bg-pink-100 shadow-lg">
            <div className="w-20">
                <Link to="/"> 
                    <img className="w-20" src= {LOGO_URL}></img>
                </Link>
            </div>
            <div className="flex">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}  </li>
                    <li className="px-4 hover:bg-pink-200 rounded-lg"><Link to="/">Home</Link></li>
                    <li className="px-4 hover:bg-pink-200 rounded-lg "><Link to="/about">About Us</Link></li>
                    <li className="px-4 hover:bg-pink-200 rounded-lg"><Link to="/contact">Contact us </Link></li>
                    <li className="px-4 hover:bg-pink-200 rounded-lg"><Link to="/grocery">Grocery </Link></li>
                    <button className="px-4 hover:bg-pink-200 rounded-lg" 
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