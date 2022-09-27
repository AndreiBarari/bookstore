import { useEffect, useState } from "react";
import { getBook } from "../../service/bookService";
import { IBook } from "../../types/IBook";

export const useBook = (uuid: string) => {
  const [book, setBook] = useState<IBook>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getBook(uuid);
        setBook(data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, [uuid]);

  return {
    book,
    isLoading,
    isError,
  };
};
