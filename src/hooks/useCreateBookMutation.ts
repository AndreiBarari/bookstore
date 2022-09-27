import { useMutation, useQueryClient } from "@tanstack/react-query";
import { keyBuilder } from "../keyBuilder";
import { postBook } from "../service/bookService";

export const useCreateBookMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(postBook, {
    onSuccess: () => {
      queryClient.invalidateQueries(keyBuilder.books());
    },
  });
};
