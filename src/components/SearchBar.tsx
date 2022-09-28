import { TextInput } from "@mantine/core";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { useSearchSelector } from "../hooks/useSearchSelector";
import { setSearch } from "../store/booksSlice";

function SearchBar() {
  const search = useSearchSelector();
  const dispatch = useDispatch();

  return (
    <TextInput
      type="search"
      value={search}
      onChange={event => dispatch(setSearch(event.currentTarget.value))}
      placeholder="Search"
      icon={<SearchIcon />}
    />
  );
}

export default SearchBar;
