import React, {lazy, Suspense} from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./component/Header";
import BodyComponent from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";
// import Grocery from "./component/Grocery";


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

const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <Outlet />
        </div>
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
                element: <About />
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