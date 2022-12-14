import { Button, Container, createStyles, Group, Modal, ScrollArea, Table } from "@mantine/core";
import { BookDetailsAdmin } from "./BookDetailsAdmin";
import { NavLink } from "react-router-dom";
// import { useBooks } from "../../hooks/customHooks/useBooks";
import { useState } from "react";
import CreateBook from "./components/CreateBook";
import { useBooksQuery } from "../../hooks/useBooksQuery";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { IBook } from "../../types/IBook";
import SearchBar from "../../components/SearchBar";
import useFilteredBooksSelector from "../../hooks/useFilteredBooksSelector";
import AdminTableHead from "./components/AdminTableHead";

const useStyles = createStyles(theme => ({
  theader: {
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
  const { isLoading, isError } = useBooksQuery();

  const filteredBooks = useFilteredBooksSelector();

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
        <Group position="apart">
          <NavLink to="/Books">
            <Button color="blue.3">Shelf</Button>
          </NavLink>
          <Button color="blue.3" onClick={() => setOpened(true)}>
            List book
          </Button>
        </Group>

        <SearchBar />

        <div className="modal">
          <Modal opened={opened} onClose={() => setOpened(false)} title="List a new book!">
            <CreateBook />
          </Modal>
        </div>
      </div>
      <ScrollArea sx={{ height: "94vh" }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
        <Table sx={{ minWidth: 700 }}>
          <thead className={cx(classes.theader, { [classes.scrolled]: scrolled })}>
            <AdminTableHead />
          </thead>
          <tbody>
            {filteredBooks.map((book: IBook) => (
              <BookDetailsAdmin key={book._uuid} book={book} />
            ))}
          </tbody>
        </Table>
      </ScrollArea>
    </div>
  );
}

export default AdminPanel;
