import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    // Dispatch an action
    const dispatch = useDispatch();

    // Get the items from the Redux store
    const cartItems = useSelector((store) => store.cart.items);

    const handleAddItem = (item) => {
        // Dispatch the addItem action
        dispatch(addItem(item));
    };

    const handleRemoveItem = (item) => {
        // Dispatch the removeItem action
        dispatch(removeItem(item));
    };

    // Function to check if an item is in the cart
    const itemInCart = (itemId) => {
        return cartItems.some((cartItem) => cartItem.card.info.id === itemId);
    };

    return (
        <div>
            {items.map((item) => {
                return (
                    <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left flex items-start justify-between">
                        <div className="flex flex-col">
                            <span>{item.card.info.name}</span>
                            <span className="text-gray-700">₹{item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}</span>
                            <div className="py-2 text-gray-700 max-w-xs">
                                <p className="text-xs">{item.card.info.description}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img src={CDN_URL + item.card.info.imageId} className="w-24 h-auto" alt={item.card.info.name}></img>
                            {itemInCart(item.card.info.id) ? (
                                <button className="mt-2 shadow-lg bg-red-400 text-white py-1 px-4 rounded-lg hover:bg-red-600"
                                    onClick={() => handleRemoveItem(item)}
                                >
                                    Remove -
                                </button>
                            ) : (
                                <button className="mt-2 shadow-lg bg-blue-400 text-white py-1 px-4 rounded-lg hover:bg-blue-600"
                                    onClick={() => handleAddItem(item)}
                                >
                                    Add +
                                </button>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;
