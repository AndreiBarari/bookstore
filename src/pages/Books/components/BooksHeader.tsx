import {
  createStyles,
  Header,
  Text,
  Container,
  Title,
  Group,
  ActionIcon,
  Button,
} from "@mantine/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartSelector } from "../../../hooks/useCartSelector";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../store/cartSlice";

const HEADER_HEIGHT = 60;

const useStyles = createStyles(() => ({
  root: {
    position: "relative",
    zIndex: 0,
  },

  header: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    maxWidth: "90vw",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
}));

export function BooksHeader() {
  const { classes } = useStyles();
  const cartItemsNumber = useCartSelector();
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <Header height={HEADER_HEIGHT} mb={16} className={classes.root}>
      <Container className={classes.header}>
        <Title>Our shelf:</Title>
        <Group>
          <Text>Your cart:</Text>
          <ActionIcon color="blue.8" size="lg" radius={20} variant="light" onClick={handleClear}>
            <ShoppingCartIcon />
            {cartItemsNumber === 0 ? "" : <span className="itemCount">{cartItemsNumber}</span>}
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}
