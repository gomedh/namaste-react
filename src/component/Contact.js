import { useContext } from "react";
import UserContext from "../utils/userContext";

const Contact = () => {

    const {loggedInUser, setuserName} = useContext(UserContext);

    return (
        <div className="text-center">
            <input
                className="border border-black p-2"
                placeholder="Username"
                value={loggedInUser}
                onChange={(e) => setuserName(e.target.value)}
            />
        </div>
    )
}


export default Contact;


//rafce to create a new functional component and export it