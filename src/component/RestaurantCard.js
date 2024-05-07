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
    } = resData?.info;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg hover:cursor-pointer bg-gray-200 h-[500px] hover:bg-gray-300">
            <img className=" w-[13rem] rounded-lg"
            alt={name}
                src={
                    CDN_URL + cloudinaryImageId 
                    }
            />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating + "✅"}</h4>
            <h4>{maxDeliveryTime}</h4>
            <h4>{`${costForTwo} For Two`}</h4>
        </div>
    )
};

export default RestaurantCard;