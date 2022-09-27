import { createStyles, Paper, Text, Title, Button, Badge, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IBook } from "../../../types/IBook";

const useStyles = createStyles(theme => ({
  card: {
    height: 710,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    textShadow: "2px 2px #000",
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    fontWeight: 700,
    fontSize: 16,
    textShadow: "2px 2px #000",
    textTransform: "uppercase",
  },
  options: {
    display: "flex",
    width: "100%",
    gap: "4px",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

interface IBookCardProps {
  book: IBook;
}

export function BookCard({ book }: IBookCardProps) {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/books/${book._uuid}`);
  };
  const { classes } = useStyles();
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${book.cover})` }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {book.title}
        </Title>
        <Text className={classes.category} size="xs">
          By {book.author}
        </Text>
      </div>
      <div className={classes.options}>
        <Group position="apart">
          <Badge color="red.6" variant="filled">
            $ {book.price}
          </Badge>
          <Badge color={book.availability === 0 ? "red.5" : "green.5"} variant="light">
            {book.availability === 0 ? "Out of stock" : "In Stock"}
          </Badge>
        </Group>
        <Group>
          <Button onClick={handleRedirect} variant="light" color="blue.8">
            Details
          </Button>
        </Group>
      </div>
    </Paper>
  );
}
