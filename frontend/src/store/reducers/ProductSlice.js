// src/store/reducers/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      name: "Coco Mademoiselle",
      price: 12999,
      tag: "NEW",
      image: "https://images.unsplash.com/photo-1592842414859-bca1263fabc2",
    },
    {
      id: 2,
      name: "Bleu de Chanel",
      price: 11999,
      tag: "HOT",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Chanel No. 5",
      price: 13999,
      tag: "ICONIC",
      image: "https://images.unsplash.com/photo-1721190171118-c5c0921ea6c0?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Chanel No. 5",
      price: 13999,
      tag: "ICONIC",
      image: "https://images.unsplash.com/photo-1721190171118-c5c0921ea6c0?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Chanel No. 5",
      price: 13999,
      tag: "ICONIC",
      image: "https://images.unsplash.com/photo-1700062153106-b20e90d8560c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Chanel Eau Tendre",
      price: 10999,
      tag: "FRESH",
      image: "https://images.unsplash.com/photo-1598187118282-406477686278?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export const selectProducts = (state) => state.products.products;
export default productSlice.reducer;
