import { useState } from "react";
import { Button, Modal, Image } from "@mantine/core";
import { useBooksQuery } from "../../hooks/useBooksQuery";
import { IBook } from "../../types/IBook";
import DeleteBook from "./components/DeleteBook";
import UpdateBook from "./components/UpdateBook";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

interface IBookDetailsProps {
  book: IBook;
}

export function BookDetailsAdmin({ book }: IBookDetailsProps) {
  const [updated, setUpdated] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const delMsg = `Confirm you want to delete ${book.title}!`;

  return (
    <tr>
      <td>
        <Image src={book.cover} width={50} alt="random unsplash image" />
      </td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.availability}</td>
      <td>{book.pages}</td>
      <td>{book.publisher}</td>
      <td>{book.language}</td>
      <td>{book.price}</td>
      <td style={{ minWidth: "300px", wordBreak: "break-word" }}>{book.description}</td>
      <td>
        <Modal opened={updated} onClose={() => setUpdated(false)} title="Edit book!">
          <UpdateBook book={book} />
        </Modal>
        <Button onClick={() => setUpdated(true)} color="green" radius={50} px={8} py={8}>
          <ModeEditIcon />
        </Button>
      </td>
      <td>
        <Modal opened={deleted} onClose={() => setDeleted(false)} title={delMsg}>
          <DeleteBook uuid={book._uuid} />
        </Modal>
        <Button onClick={() => setDeleted(true)} color="red" radius={50} px={8}>
          <DeleteIcon />
        </Button>
      </td>
    </tr>
  );
}
