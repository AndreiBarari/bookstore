import { useMutation, useQueryClient } from "@tanstack/react-query";
import { keyBuilder } from "../keyBuilder";
import { deleteBook } from "../service/bookService";

export const useDeleteBookMutation = (uuid: string) => {
  const queryClient = useQueryClient();
  return useMutation(deleteBook, {
    onSuccess: book => {
      queryClient.invalidateQueries(keyBuilder.book(book._uuid));
    },
  });
};
