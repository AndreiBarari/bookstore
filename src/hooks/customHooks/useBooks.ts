import { useState, useEffect } from "react";
import { getBooks } from "../../service/bookService";
import { IBook } from "../../types/IBook";

export const useBooks = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    (async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, []);

  return { books, isError, isLoading };
};
