import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { keyBuilder } from "../keyBuilder";
import { getBooks } from "../service/bookService";
import { setBooks } from "../store/booksSlice";

export const useBooksQuery = () => {
  const dispatch = useDispatch();

  return useQuery(keyBuilder.books(), getBooks, {
    onSuccess: data => {
      dispatch(setBooks(data));
    },
  });
};
