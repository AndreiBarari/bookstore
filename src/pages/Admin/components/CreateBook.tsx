import { Button, Group, Textarea, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useCreateBook } from "../../../hooks/customHooks/useCreateBook";
import { useCreateBookMutation } from "../../../hooks/useCreateBookMutation";
import { ICreateBookReq } from "../../../types/ICreateBookReq";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createBookSchema = z.object({
  cover: z.string().min(1, "The book must have a cover"),
  title: z.string().min(1, "The book must have a title"),
  author: z.string().min(1, "The book must have an author"),
  availability: z.string(),
  pages: z.string(),
  publisher: z.string().min(1, "The book must have a publisher"),
  language: z.string().min(1, "The book must have a language"),
  price: z.string(),
  description: z.string().min(1, "The book must have a description"),
});

type FormFields = z.infer<typeof createBookSchema>;

function CreateBook() {
  // const [cover, setCover] = useState("");
  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  // const [availability, setAvailability] = useState(0);
  // const [pages, setPages] = useState(0);
  // const [publisher, setPublisher] = useState("");
  // const [language, setLanguage] = useState("");
  // const [price, setPrice] = useState(0);
  // const [description, setDescription] = useState("");

  const { register, handleSubmit, reset, formState } = useForm<FormFields>({
    defaultValues: {
      cover: "",
      title: "",
      author: "",
      availability: "0",
      pages: "0",
      publisher: "",
      language: "",
      price: "0",
      description: "",
    },
    mode: "onBlur",
    resolver: zodResolver(createBookSchema),
  });

  // const { listBook, isLoading, isError, book } = useCreateBook();
  const { isLoading, mutate: listBook, data } = useCreateBookMutation();

  const onSubmit = async (values: FormFields) => {
    const { availability, pages, price, ...rest } = values;
    listBook(
      {
        availability: Number(availability),
        pages: Number(pages),
        price: Number(price),
        ...rest,
      },
      {
        onSuccess: () => {
          // setCover("");
          // setTitle("");
          // setAuthor("");
          // setAvailability(0);
          // setPages(0);
          // setPublisher("");
          // setLanguage("");
          // setPrice(0);
          // setDescription("");
          reset();
        },
      }
    );
  };
  return (
    <div>
      {data?.items[0] && <div>You listed the book: {data.items[0].title}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          // onChange={e => {
          //   setCover(e.target.value);
          // }}
          // value={cover}
          placeholder="Cover"
          label="Cover"
          withAsterisk
          error={formState.errors?.cover?.message}
          {...register("cover")}
        />
        <Group>
          <TextInput
            // onChange={e => {
            //   setTitle(e.target.value);
            // }}
            // value={title}
            placeholder="Title"
            label="Title"
            withAsterisk
            error={formState.errors?.title?.message}
            {...register("title")}
          />
          <TextInput
            // onChange={e => {
            //   setAuthor(e.target.value);
            // }}
            // value={author}
            placeholder="Author"
            label="Author"
            withAsterisk
            error={formState.errors?.author?.message}
            {...register("author")}
          />
        </Group>

        <Group>
          <TextInput
            // onChange={e => {
            //   setAvailability(Number(e.target.value));
            // }}
            // value={availability}
            type="number"
            placeholder="#InStock"
            label="#InStock"
            withAsterisk
            error={formState.errors?.availability?.message}
            {...register("availability")}
          />
          <TextInput
            // onChange={e => {
            //   setPages(Number(e.target.value));
            // }}
            // value={pages}
            type="number"
            placeholder="#OfPages"
            label="#OfPages"
            withAsterisk
            error={formState.errors?.pages?.message}
            {...register("pages")}
          />
        </Group>
        <TextInput
          // onChange={e => {
          //   setPublisher(e.target.value);
          // }}
          // value={publisher}
          placeholder="Publisher"
          label="Publisher"
          withAsterisk
          error={formState.errors?.publisher?.message}
          {...register("publisher")}
        />
        <Group>
          <TextInput
            // onChange={e => {
            //   setLanguage(e.target.value);
            // }}
            // value={language}
            placeholder="Language"
            label="Language"
            withAsterisk
            error={formState.errors?.language?.message}
            {...register("language")}
          />
          <TextInput
            // onChange={e => {
            //   setPrice(Number(e.target.value));
            // }}
            // value={price}
            type="number"
            placeholder="Price"
            label="Price"
            withAsterisk
            error={formState.errors?.price?.message}
            {...register("price")}
          />
        </Group>
        <Textarea
          // onChange={e => {
          //   setDescription(e.target.value);
          // }}
          // value={description}
          placeholder="Description"
          label="Description"
          withAsterisk
          autosize
          minRows={3}
          maxRows={6}
          error={formState.errors?.description?.message}
          {...register("description")}
        />

        <Button loading={isLoading} type="submit" my={10}>
          List
        </Button>
      </form>
    </div>
  );
}

export default CreateBook;
