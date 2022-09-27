import { useCallback, useState } from "react";
import { deleteBook } from "../../service/bookService";
import { IBook } from "../../types/IBook";

export const useDeleteBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [book, setBook] = useState<IBook>();

  const removeBook = useCallback(async (uuid: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await deleteBook(uuid);
      setBook(data);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  return { removeBook, isLoading, isError, book };
};
