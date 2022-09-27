import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IBook } from "../types/IBook";

export const useBooksSelector = () => {
  const books = useSelector((state: RootState) => state.books.books);
  return books as IBook[];
};
