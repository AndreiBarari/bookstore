import { useQuery } from "@tanstack/react-query";
import { keyBuilder } from "../keyBuilder";
import { getBooks } from "../service/bookService";

export const useBooksQuery = () => {
  return useQuery(keyBuilder.books(), getBooks);
};
