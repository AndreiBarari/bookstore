import { useCallback, useState } from "react";
import { postBook } from "../../service/bookService";
import { IBook } from "../../types/IBook";
import { ICreateBookReq } from "../../types/ICreateBookReq";

export const useCreateBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [book, setBook] = useState<IBook>();

  const listBook = useCallback(async (req: ICreateBookReq) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await postBook(req);
      setBook(data.items[0]);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  return { listBook, isLoading, isError, book };
};
