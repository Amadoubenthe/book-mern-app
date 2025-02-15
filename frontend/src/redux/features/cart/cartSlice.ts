import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../../../models/book.model";

export interface CartState {
  books: Book[];
}

const initialState: CartState = {
  books: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Book>) => {
      const existingProduct = state.books.find(
        (element) => element._id === action.payload._id
      );
      if (existingProduct) {
        return;
      } else {
        state.books.push(action.payload);
      }
    },
    removeCart: (state, action: PayloadAction<Book>) => {
      state.books = state.books.filter(
        (element) => element._id !== action.payload._id
      );
    },

    clearCart: (state) => {
      state.books = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCart, removeCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
