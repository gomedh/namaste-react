import React from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./component/Header";
import BodyComponent from "./component/Body";


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



const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<AppLayout />); // Syntax to babel to understand this is a functional Component