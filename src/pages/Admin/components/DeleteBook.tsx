import { Button } from "@mantine/core";
// import { useDeleteBook } from "../../../hooks/customHooks/useDeleteBook";
import { useDeleteBookMutation } from "../../../hooks/useDeleteBookMutation";

interface IDeleteBook {
  uuid: string;
}

function DeleteBook({ uuid }: IDeleteBook) {
  const { mutate } = useDeleteBookMutation(uuid);

  const handleDelete = () => {
    mutate(uuid);
    window.location.reload();
  };

  return (
    <>
      <Button color="red" onClick={handleDelete}>
        Confirm
      </Button>
    </>
  );
}

export default DeleteBook;
