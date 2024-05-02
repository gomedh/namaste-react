import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    
    const {resId} = useParams();

    const menuData = useRestaurantMenu(resId);

    if (menuData === null ) return <Shimmer />; // to handle inital null set null value 

    const {name, cuisines,  costForTwoMessage} = menuData?.cards[0]?.card?.card?.info;
    const {itemCards} = menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

// *********************************** -- JSX retrun -- *************************************************************

    return   (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul>{
                itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - {"Rs. "}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;