import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestauraunt] = useState(null);

    useEffect(() => {
        getRestaurantMenu();
    },[]);

    async function getRestaurantMenu() {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setRestauraunt(json.data);
    }

    return restaurant;
}



export default useRestaurantMenu;