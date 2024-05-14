import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    const {title, itemCards} = data?.card?.card;

    // const [showItems, setShowItems] = useState(false);
    // This compoennt has become a controlled component as the parent component is controlled the expoand collapse stuff
    
    const handleClick = () => {

        setShowIndex();
        // setShowItems(!showItems);
    }

    return (
        <div>
            {/* Accordian header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
               <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                    <span>✅</span>
               </div>
               {/* Accordian Body */}
                { showItems && <ItemList items = {itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;