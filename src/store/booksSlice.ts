import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  search: "",
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks(state, action) {
      state.books = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export default booksSlice.reducer;
export const { setBooks, setSearch } = booksSlice.actions;
