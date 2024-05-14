import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        // user: UserReducer - Incase we have different redcuers
    } 
});

export default appStore;