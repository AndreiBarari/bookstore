import { TextInput, Group, Textarea, Button } from "@mantine/core";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useUpdateBook } from "../../../hooks/customHooks/useUpdateBook";
import { useUpdateBookMutation } from "../../../hooks/useUpdateBookMutation";
import { IBook } from "../../../types/IBook";

interface IUpdateBook {
  book: IBook;
}

function UpdateBook({ book }: IUpdateBook) {
  const [cover, setCover] = useState(book.cover);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [availability, setAvailability] = useState(book.availability);
  const [pages, setPages] = useState(book.pages);
  const [publisher, setPublisher] = useState(book.publisher);
  const [language, setLanguage] = useState(book.language);
  const [price, setPrice] = useState(book.price);
  const [description, setDescription] = useState(book.description);

  // const { updateBook, isLoading, isError, book: updatedBook } = useUpdateBook();
  const { mutate, isLoading } = useUpdateBookMutation();

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      _uuid: book._uuid,
      cover,
      title,
      author,
      availability,
      pages,
      publisher,
      language,
      price,
      description,
    });
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <TextInput
          onChange={e => {
            setCover(e.target.value);
          }}
          placeholder="Cover"
          label="Cover"
          withAsterisk
          value={cover}
        />
        <Group>
          <TextInput
            onChange={e => {
              setTitle(e.target.value);
            }}
            placeholder="Title"
            label="Title"
            withAsterisk
            value={title}
          />
          <TextInput
            onChange={e => {
              setAuthor(e.target.value);
            }}
            placeholder="Author"
            label="Author"
            withAsterisk
            value={author}
          />
        </Group>

        <Group>
          <TextInput
            onChange={e => {
              setAvailability(Number(e.target.value));
            }}
            type="number"
            placeholder="#InStock"
            label="#InStock"
            value={availability}
            withAsterisk
          />
          <TextInput
            onChange={e => {
              setPages(Number(e.target.value));
            }}
            type="number"
            placeholder="#OfPages"
            label="#OfPages"
            value={pages}
            withAsterisk
          />
        </Group>
        <TextInput
          onChange={e => {
            setPublisher(e.target.value);
          }}
          placeholder="Publisher"
          label="Publisher"
          withAsterisk
          value={publisher}
        />
        <Group>
          <TextInput
            onChange={e => {
              setLanguage(e.target.value);
            }}
            placeholder="Language"
            label="Language"
            withAsterisk
            value={language}
          />
          <TextInput
            onChange={e => {
              setPrice(Number(e.target.value));
            }}
            type="number"
            placeholder="Price"
            label="Price"
            value={price}
            withAsterisk
          />
        </Group>
        <Textarea
          onChange={e => {
            setDescription(e.target.value);
          }}
          placeholder="Description"
          label="Description"
          withAsterisk
          value={description}
          autosize
          minRows={3}
          maxRows={6}
        />

        <Button loading={isLoading} type="submit" my={10}>
          Update
        </Button>
      </form>
    </div>
  );
}

export default UpdateBook;
