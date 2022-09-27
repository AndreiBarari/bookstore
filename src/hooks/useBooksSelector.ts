import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useBooksSelector = () => {
  const books = useSelector((state: RootState) => state.books.books);
  return books;
};
