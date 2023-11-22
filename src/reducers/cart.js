import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)

      if (existingProduct) {
        //increment qty
        existingProduct.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 })
      }
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)
      if (existingProduct && existingProduct.qty === 1) {
        //remove it
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else if (existingProduct) {
        existingProduct.qty -= 1
      }
    }
  }
})