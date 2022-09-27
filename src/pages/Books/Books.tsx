import { Grid } from "@mantine/core";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
// import { useBooks } from "../../hooks/customHooks/useBooks";
import { useBooksQuery } from "../../hooks/useBooksQuery";
import { BookCard } from "./components/BookCard";

function Books() {
  // const { books, isLoading, isError } = useBooks();
  const { isLoading, isError, data: books } = useBooksQuery();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <div className="books-content">
      <Grid my={12} mx="auto" style={{ width: "90vw" }}>
        {books.map(book => (
          <Grid.Col sm={4} key={book._uuid} p={12}>
            <BookCard book={book} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}

export default Books;
