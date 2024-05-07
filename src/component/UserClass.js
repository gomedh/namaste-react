import React from "react";
import { GIT_USER_URL } from "../utils/constants";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        // Never update the state directly, always use setState(), don't modify like this.state.count = this.state.count + 1;
        this.state = {
            // count: 0,
            // count1: 1,
        
            //Lower userinfo is like a dummy data until the api call is made.
            userInfo: {
                name: "Username",
                location: "Default Location",
                contact: "Default Contact",
                avatar_url: "Default url for avatar"
            }
        }

    }
    // Used to call the api end point
    async componentDidMount() {
        const data = await fetch(GIT_USER_URL)
        const json = await data.json();
        this.setState(
            {
                userInfo: json
            }
        )
        console.log(this.state.userInfo, 'dd');
    }

    componentDidUpdate() {
        console.log("User component is updated");
    }

    // When the component is about to be removed from the DOM, it will be called.
    componentWillUnmount() {

    }


    render() {
        // const {name, place, contact} = this.props;
        const {name, location, contact, html_url, avatar_url} = this.state.userInfo;
        // const {count} = this.state;
        return (
            <a>
                <div>
             {/* <h2>Count: {this.state.count}</h2> */}
             {/* <button onClick={
                () => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }
             }>Counter Increase</button>
             <button onClick={
                () => {
                    this.setState({
                        count: this.state.count - 1,
                        // count1: this.state.count1 + 1 //  Can do like this, for multiple state variables
                    })
                }
                }>Counter Decrease</button> */}
            <img className="avatar" src={avatar_url}></img>
             <h2>Name: {name}</h2>
             <h2>Place: {location}</h2>
             <h2>Email: "gomedh.tak1@gmail.com"</h2>
         </div>
            </a>
        )
    }   
}

export default UserClass;


// IN this the constructoe is first called and then the render method is called.
// Calling sequence is constructor -> render -> componentDidMount -> render  