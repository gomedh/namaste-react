import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom"; // used to navigate to other pages without reloading the page.
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


const HeaderComponent = () => {

// *********************************** -- All local State Variables -- *************************************************************

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);

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
<div className="flex justify-between items-center bg-pink-100 shadow-lg">
    <Link to="/" className="flex items-center">
        <img className="w-20 ml-1" src={LOGO_URL} alt="Logo" />
        <span className="ml-2 font- font-extrabold">FORK YOU !!</span>
    </Link>
    <div className="flex">
        <ul className="flex p-4 m-4 font-bold"> 
            <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="px-4 hover:bg-pink-200 rounded-lg"><Link to="/">Home</Link></li>
            <li className="px-4 hover:bg-pink-200 rounded-lg"><Link to="/about">About Us</Link></li>
            <li className="px-4 hover:bg-pink-200 rounded-lg"><Link to="/contact">Contact us</Link></li>
            <li className="px-4 hover:bg-pink-200 rounded-lg"><Link to="/grocery">Grocery</Link></li>
            <button className="px-4 hover:bg-pink-200 rounded-lg" onClick={buttonName}>
                {btnName}
            </button> 
            <li className="px-4 hover:bg-pink-200 rounded-lg">{data?.loggedInUser}</li>
        </ul>
    </div>
</div>


    )
};

// *********************************** -- Module Export -- *************************************************************
export default HeaderComponent;