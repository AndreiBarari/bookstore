import { Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
// import { useCreateBook } from "../../../hooks/customHooks/useCreateBook";
import { useCreateBookMutation } from "../../../hooks/useCreateBookMutation";
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
  const { register, handleSubmit, reset, formState } = useForm<FormFields>({
    defaultValues: {
      cover: "",
      title: "",
      author: "",
      availability: "",
      pages: "",
      publisher: "",
      language: "",
      price: "",
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
          placeholder="Cover"
          label="Cover"
          error={formState.errors?.cover?.message}
          {...register("cover")}
        />
        <Group>
          <TextInput
            placeholder="Title"
            label="Title"
            error={formState.errors?.title?.message}
            {...register("title")}
          />
          <TextInput
            placeholder="Author"
            label="Author"
            error={formState.errors?.author?.message}
            {...register("author")}
          />
        </Group>

        <Group>
          <TextInput
            type="number"
            placeholder="#InStock"
            label="#InStock"
            error={formState.errors?.availability?.message}
            {...register("availability")}
          />
          <TextInput
            type="number"
            placeholder="#OfPages"
            label="#OfPages"
            error={formState.errors?.pages?.message}
            {...register("pages")}
          />
        </Group>
        <TextInput
          placeholder="Publisher"
          label="Publisher"
          error={formState.errors?.publisher?.message}
          {...register("publisher")}
        />
        <Group>
          <TextInput
            placeholder="Language"
            label="Language"
            error={formState.errors?.language?.message}
            {...register("language")}
          />
          <TextInput
            type="number"
            placeholder="Price"
            label="Price"
            error={formState.errors?.price?.message}
            {...register("price")}
          />
        </Group>
        <Textarea
          placeholder="Description"
          label="Description"
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
