import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    
    const {resId} = useParams();

    const menuData = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    if (menuData === null ) return <Shimmer />; // to handle inital null set null value 

    const categories = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
    (
        c => c.card?.["card"]?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )

        console.log(categories,'cat');

    const {name, cuisines,  costForTwoMessage} = menuData?.cards[2].card?.card?.info;

// *********************************** -- JSX retrun -- *************************************************************

    return   (
        <div className="text-center">
            <h1 className="my-6 font-bold text-2xl ">{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <p>{costForTwoMessage}</p>
            
            {/* categories for accordian */}
            {
                categories.map((category, index) => 
                {   // Controlled Component - Parent is controlling the state of the component.
                    console.log(showIndex, 'index');
                    return <RestaurantCategory 
                            key={category?.card?.card?.title} 
                            data={category} 
                            showItems={index === showIndex ? true: false} 
                            setShowIndex = {() => setShowIndex(index)}
                            />
                })
            }
        </div>
    )
}

export default RestaurantMenu;

// This is a parent ot Restaurant Category component so that becomes a controlled componenet