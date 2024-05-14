import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // console.log('add');
            // mutating the state here
            state.items.push(action.payload);

        },

        removeItem: (state, action) => {
            const index = state.items.findIndex(item => item.card.info.id === action.payload.card.info.id);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },

        clearCart: (state) => {
            // state.items.length = 0;
            state.items = [];
        }
    }
},
);

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;