import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Black Fujifilm Dslr Camera",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
    description:
      "Black Fujifilm DSLR Camera with sharp image quality and sleek design.",
    price: "200",
    category: "Camera",
    date: "Unavailable",
  },
  {
    id: 2,
    name: "Pink Lipstick and Blush-On",
    img: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
    description:
      "Pink Lipstick and Blush-On for a soft, radiant, and natural makeup look.",
    price: "132",
    category: "Beauty & Personal Care",
    date: "Unavailable",
  },
  {
    id: 3,
    name: "Four Venus Eye Makeup ",
    img: "https://images.pexels.com/photos/2697786/pexels-photo-2697786.jpeg",
    description:
      "Four Venus Eye Makeup set for bold, vibrant, and captivating eye looks.",
    price: "100",
    category: "Beauty & Personal Care",
    date: "Unavailable",
  },
  {
    id: 4,
    name: "Ceramics Tableware",
    img: "https://images.pexels.com/photos/7674568/pexels-photo-7674568.jpeg",
    description:
      "Elegant Ceramics Tableware set for stylish and durable dining.",
    price: "304",
    category: "Home & Kitchen",
    date: "Unavailable",
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
