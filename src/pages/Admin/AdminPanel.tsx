import {
  Button,
  createStyles,
  Loader,
  Modal,
  ScrollArea,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { BookDetailsAdmin } from "./BookDetailsAdmin";
import { NavLink } from "react-router-dom";
// import { useBooks } from "../../hooks/customHooks/useBooks";
import { useState } from "react";
import CreateBook from "./components/CreateBook";
import { useBooksQuery } from "../../hooks/useBooksQuery";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import SearchBar from "../../components/SearchBar";
// import { BookDetailsAdmin1 } from "./BookDetailsAdmin1";

const useStyles = createStyles(theme => ({
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

function AdminPanel() {
  const [opened, setOpened] = useState(false);
  // const { books, isLoading, isError } = useBooks();
  const { isLoading, isError, data: books } = useBooksQuery();

  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <div className="admin-panel">
      <div className="admin-header">
        <NavLink to="/Books">
          <Button color="blue.3">Books</Button>
        </NavLink>
        <SearchBar />
        <div className="modal">
          <Modal opened={opened} onClose={() => setOpened(false)} title="List a new book!">
            <CreateBook />
          </Modal>
          <Button color="blue.3" onClick={() => setOpened(true)}>
            List book
          </Button>
        </div>
      </div>
      <ScrollArea sx={{ height: "94vh" }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
        <Table sx={{ minWidth: 700 }}>
          <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
            <tr>
              <th>Cover</th>
              <th>Title</th>
              <th>Author</th>
              <th>#InStock</th>
              <th>#Pages</th>
              <th>Publisher</th>
              <th>Language</th>
              <th>Price</th>
              <th>Description</th>
              <th>Settings</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <BookDetailsAdmin key={book._uuid} book={book} />
            ))}
          </tbody>
          {/* <tbody>
            {books.map(book => (
              <BookDetailsAdmin1 key={book._uuid} book={book} />
            ))}
          </tbody> */}
        </Table>
      </ScrollArea>
    </div>
  );
}

export default AdminPanel;
