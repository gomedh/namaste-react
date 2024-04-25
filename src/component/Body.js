import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; //named import statement while importing from react is 
import Shimmer from "./Shimmer";


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
            restaurant => restaurant.info.avgRating > 4
        );
        setFilteredRestaurants(filtered);
    };


    // Method for least rated restaurants
    const filterLeastRatedRestaurants = () => {
        const filtered = listOfRestaurants.filter(
            restaurant => restaurant.info.avgRating < 4
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
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        ); //Part of JS engine to get data

        const json = await data.json(); 
        const restList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restList);
        setFilteredRestaurants(restList);
    }

    if (!listOfRestaurants) {return null;}


// *********************************** -- JSX retrun -- *************************************************************
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                        <input
                            type="text"
                            className="search-box"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                </div>
                <button className="filter-btn"  onClick={showAll}>
                    Show All Restaurants
                </button>
                <button className="filter-btn"  onClick={filterTopRatedRestaurants}>
                    Top Rated Restaurant
                </button>
                <button className="filter-btn"  onClick={filterLeastRatedRestaurants}>
                    Least Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => 
                    (
                    <RestaurantCard  key={restaurant?.info?.id} 
                    resData = {restaurant} 
                    />))
                }
            </div>
        </div>
    )
};

// *********************************** -- Module Export -- *************************************************************

export default BodyComponent;