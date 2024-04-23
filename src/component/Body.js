import RestaurantCard from "./RestaurantCard";
import restrautList from "../utils/mockData"
import { useState } from "react"; //named import statement while importing from react is 

const BodyComponent = () => {
    // local state variables
    const [searchTerm, setSearchTerm] = useState(''); 
    //usestate returns an array, just array destructuring where 
    // first element is the state variable and second element is a function to update the state variable and 
    // it is same as arr[0] and arr[1] for example
    // const arr = useState(restList);
    // const filteredRestaurants = arr[0];
    // const setRestaurants = arr[1];
    const [showTopRated, setShowTopRated] = useState(false);
    const [showLeastRated, setShowLeastRated] = useState(false);
    const [filteredRestaurants, setFilteredRestaurants] = useState(restrautList); // just like let listofRestaurants = restrautList;

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        const filtered = restrautList.filter(
            restaurant => restaurant.data.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    }


    const showAll = () => {
        setFilteredRestaurants(restrautList);
        setShowTopRated(false);
        setShowLeastRated(false);
    };

    const filterTopRatedRestaurants = () => {
        const filtered = restrautList.filter(
            restaurant => restaurant.data.avgRating > 4
        );
        setFilteredRestaurants(filtered);
        setShowTopRated(true);
        setShowLeastRated(false);
    };

    const filterLeastRatedRestaurants = () => {
        const filtered = restrautList.filter(
            restaurant => restaurant.data.avgRating < 3
        );
        setFilteredRestaurants(filtered);
        setShowLeastRated(true);
        setShowTopRated(false);
    };

    return (
        <div className="body">
            <div className="search">
                <input
                    type="text"
                    placeholder="Restaurant Name..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="filter">
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
                    <RestaurantCard  key={restaurant.data.id} 
                    resData = {restaurant} 
                    />))
                }
            </div>
        </div>
    )
};

export default BodyComponent;