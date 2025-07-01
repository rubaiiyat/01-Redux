import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "carts",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(
        (product) => product.productID === action.payload.id
      );
      if (existingProduct) {
        alert("Item Already Added");
      } else {
        state.push({
          ...action.payload,
          id: Date.now(),
          quantity: 1,
          productID: action.payload.id,
        });
      }
    },
  },
});

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
