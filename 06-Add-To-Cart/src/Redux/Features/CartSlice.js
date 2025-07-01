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

    increaseQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);

      if (product) {
        product.quantity++;
      }
    },

    decreaseQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity--;
        }
      }
    },

    removeProduct: (state, action) => {
      return state.filter((product) => product.id != action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeProduct } =
  CartSlice.actions;
export default CartSlice.reducer;
