import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

// *********************************** -- JSX retrun -- *************************************************************
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl">Cart</h1>
            <div className="w-6/12 m-auto my-4">
                {cartItems.length !== 0 && <button  className="mt-2 shadow-lg hover:cursor-pointer bg-red-400 text-white py-1 px-4 rounded-lg hover:bg-red-600"
                onClick={() => handleClearCart()}
                >Clear Cart</button>}
                {cartItems.length === 0 && (<h1 className="my-4">Add Items to the cart</h1>)}
                <ItemList items={cartItems}></ItemList>
                {cartItems.length !== 0 && (
                     <button  className="mt-2 shadow-lg hover:cursor-pointer bg-green-600 text-white py-1 px-4 rounded-lg hover:bg-green-800"
                     ><Link to="/checkout">Checkout to Payment</Link></button>
                )}
            </div>
        </div>
    )
}

// *********************************** -- Module Export -- *************************************************************
export default Cart;