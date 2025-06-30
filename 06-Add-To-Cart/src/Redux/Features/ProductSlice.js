import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Watch",
    price: "20",
  },
  {
    id: 2,
    name: "Guitar",
    price: "50",
  },
  {
    id: 2,
    name: "Guitar",
    price: "50",
  },
  {
    id: 2,
    name: "Guitar",
    price: "50",
  },
];

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToProduct: (state, action) => {
      state.push({
        id: state.length * 2,
        ...action.payload,
      });
    },
  },
});

export const { addToProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
