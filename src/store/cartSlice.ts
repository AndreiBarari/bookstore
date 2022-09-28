import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state) {
      state.count++;
    },
    clearCart(state) {
      state.count = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, clearCart } = cartSlice.actions;
