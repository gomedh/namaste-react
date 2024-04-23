import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        name,
        cuisines,
        avgRating,
        maxDeliveryTime,
        costForTwo,
        cloudinaryImageId
    } = resData?.data;
    return (
        <div className="card">
            <img
                src={
                    CDN_URL
                     +
                    cloudinaryImageId 
                    }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{maxDeliveryTime}</h4>
            <h4>{`${costForTwo/100} For Two`}</h4>
        </div>
    )
};

export default RestaurantCard;