import { useMutation, useQueryClient } from "@tanstack/react-query";
import { keyBuilder } from "../keyBuilder";
import { putBook } from "../service/bookService";

export const useUpdateBookMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(putBook, {
    onSuccess: book => {
      queryClient.invalidateQueries(keyBuilder.book(book._uuid));
    },
  });
};
