import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [menuData, setMenuData] = useState(null);
    const {resId} = useParams();
    console.log(resId);


// *********************************** -- API data fetch -- *************************************************************

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_API_URL + resId
        );

        const json = await data.json();
        console.log(json);
        setMenuData(json.data);
    }

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