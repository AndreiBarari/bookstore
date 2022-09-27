import { TextInput } from "@mantine/core";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useBooksSelector } from "../hooks/useBooksSelector";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  //   const books = useBooksSelector();

  //     const filterBooks = () => {
  //       const filteredBooks = books?.filter(book => {
  //         book.title.includes(searchValue);
  //       });
  //       console.log(filteredBooks);
  //     };
  //     filterBooks();

  return (
    <TextInput
      type="search"
      value={searchValue}
      onChange={event => {
        setSearchValue(event.currentTarget.value);
      }}
      placeholder="Search"
      icon={<SearchIcon />}
    />
  );
}

export default SearchBar;
