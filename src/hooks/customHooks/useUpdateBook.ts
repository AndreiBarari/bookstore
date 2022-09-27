import { useCallback, useState } from "react";
import { putBook } from "../../service/bookService";
import { IBook } from "../../types/IBook";
import { IPutBookReq } from "../../types/IPutBookReq";

export const useUpdateBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [book, setBook] = useState<IBook>();

  const updateBook = useCallback(async (req: IPutBookReq) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await putBook(req);
      setBook(data);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  return { updateBook, isLoading, isError, book };
};
