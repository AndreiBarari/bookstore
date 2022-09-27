import { IBook } from "../types/IBook";
import * as booksActionTypes from "./booksActionTypes";

export const setBooks = (books: IBook[]) => ({
  type: booksActionTypes.SET_BOOKS,
  payload: {
    books,
  },
});
