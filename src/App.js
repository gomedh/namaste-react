import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./component/Header";
import BodyComponent from "./component/Body";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Cart from "./component/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";
import UserContext from "./utils/userContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Checkout from "./component/Checkout";



/**
     Header
        - Logo(Title)
        - Nav Items(Right Side)
        - Cart
     Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
*/

const Grocery = lazy(() => import("./component/Grocery")); // for the concept of lazy loading., no need to import the grocery at line 10
const About = lazy(() => import("./component/About"));

const AppLayout = () => {

    const [userName, setuserName] = useState();

    useEffect(() => {
        // Making a dummy api call for user name
        const data = {
            name: "Gomedh Tak"
        };
        setuserName(data.name);
    }, []);

    return (
       <Provider store={appStore}>
            {/* // Anywhere inside the app , we have context provider */}
            <UserContext.Provider value={{loggedInUser: userName, setuserName}}>
                <div className="app">
                    <HeaderComponent />
                    <Outlet />
                </div>
            </ UserContext.Provider>
       </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />, // Load home page
        children: [ 
            {
                path: "/",
                element: <BodyComponent />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense> // have to use Suspense for lazy loading, to prevent react from rendering before the grocery component is loaded.
                //fallback inside the Suspense component is like showing something while the grocery component is being loaded.
            }
        ],
        errorElement: <Error /> // if there is an error
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); // Syntax to babel to understand this is a functional Component