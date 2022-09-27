import { useQuery } from "@tanstack/react-query";
import { keyBuilder } from "../keyBuilder";
import { getBook } from "../service/bookService";

export const useBookQuery = (uuid: string) => {
  return useQuery(keyBuilder.book(uuid), () => getBook(uuid));
};
