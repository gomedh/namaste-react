import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";

const Checkout = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const totalSum = cartItems.reduce((total, item) => {
        const price = item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100;
        return total + price;
    }, 0);

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Payment gateway</h1>
            <div className="flex justify-center items-center">
                <div className="m-4 p-4 bg-gray-100">
                    {cartItems.map((item) => (
                        <div key={item.card.info.id} className="flex items-center m-2">
                            <img src={CDN_URL + item.card.info.imageId} className="w-24 h-auto mr-4" alt={item.card.info.name} />
                            <div className="flex flex-col font-bold">
                                <span>{item.card.info.name}</span>
                                <span className="text-gray-700 font-bold">₹{item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}</span>
                            </div>
                        </div>
                    ))}
                    <button className="mt-2 shadow-lg bg-blue-400 text-white py-1 px-4 rounded-lg hover:bg-blue-600">
                                    Pay ₹{totalSum.toFixed(2)}
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Checkout;
