import RestaurantCard, {withPromotionLabel} from "./RestaurantCard";
import { useState, useEffect } from "react"; //named import statement while importing from react is 
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const BodyComponent = () => {
    
    //usestate returns an array, just array destructuring where 
    // first element is the state variable and second element is a function to update the state variable and 
    // it is same as arr[0] and arr[1] for example
    // const arr = useState(restList);
    // const filteredRestaurants = arr[0];
    // const setRestaurants = arr[1];
    
// *********************************** -- All local State Variables -- *************************************************************
    const [searchTerm, setSearchTerm] = useState(''); 
    const [listOfRestaurants, setListOfRestaurants] = useState([]); // just like let listofRestaurants = restrautList;
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);


    const RestaurantCardPromoted = withPromotionLabel(RestaurantCard);

// *********************************** -- All the Methods -- *************************************************************
    //Method to handle search text change by user 
    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        const filtered = listOfRestaurants.filter(
            restaurant => restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    }

    // Method for show all restaurants
    const showAll = () => {
        setFilteredRestaurants(listOfRestaurants);
    };

    // Method for top rated restaurants
    const filterTopRatedRestaurants = () => {
        const filtered = listOfRestaurants.filter(
            restaurant => restaurant.info.avgRating > 4.5
        );
        setFilteredRestaurants(filtered);
    };


    // Method for least rated restaurants
    const filterLeastRatedRestaurants = () => {
        const filtered = listOfRestaurants.filter(
            restaurant => restaurant.info.avgRating < 4.1
        );
        setFilteredRestaurants(filtered);
    };

// *********************************** -- API data fetch -- *************************************************************

    // Method to fetch data from API
    useEffect(() => {
        fetchData();
    }, []); // called as soon as the component is loaded & with [] it will be called only once.

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        ) ; //Part of JS engine to get data

        const json = await data.json();
        const restList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restList);
        setFilteredRestaurants(restList);
    }

    if (!listOfRestaurants) {return null;}


// *********************************** -- JSX retrun -- *************************************************************
    
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return (
        <h1>Network Offline...!! Please check your Internet</h1>
    )

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex justify-between item-center">
                        <input
                            type="text"
                            className="m-4 p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                <div class="flex">
                    <button className=" px-2 py-2 bg-green-300 m-4 hover:bg-green-400 rounded-lg font-semibold"  onClick={showAll}>
                        Show All Restaurants
                    </button>
                    <button className=" px-2 py-2 bg-green-300 m-4  hover:bg-green-400 rounded-lg font-semibold"  onClick={filterTopRatedRestaurants}>
                        Top Rated Restaurant
                    </button>
                    <button className=" px-2 py-2 bg-green-300 m-4  hover:bg-green-400 rounded-lg font-semibold"  onClick={filterLeastRatedRestaurants}>
                        Least Rated Restaurant
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap" >
                {
                    filteredRestaurants.map((restaurant) => 
                    (   // Key should be on the parent JSX element ideally it should be like this {"/restaurants/" + restaurant.info.id}
                        <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
                            {/* if the restaurant is top rated then add top rated label to it */}
                            {
                                restaurant?.info?.avgRating > 4.5 ? (
                                    <RestaurantCardPromoted  resData = {restaurant}/>
                                ) : (
                                    <RestaurantCard
                                    resData = {restaurant} 
                                /> 
                                )
                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
};

// *********************************** -- Module Export -- *************************************************************

export default BodyComponent;