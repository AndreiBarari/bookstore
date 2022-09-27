import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Image,
  Text,
  Center,
} from "@mantine/core";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { useBookQuery } from "../../hooks/useBookQuery";
import { Rating } from "./components/Rating";

const Book = () => {
  const { uuid } = useParams();
  // const { book, isError, isLoading } = useBook(uuid || "");
  const { isLoading, isError, data: book } = useBookQuery(uuid || "");

  if (isLoading || !book) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <Center>
          <Image src={book.cover} height="auto" width="265px" alt="Book" radius="md" />
        </Center>
        <Grid gutter="md">
          <Grid.Col>
            <Card.Section>
              <Text weight={500}>{book.title}</Text>
              <Text weight={400}>by {book.author}</Text>
            </Card.Section>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card.Section>
              <Group my="xs">
                <Badge color="red.6" variant="filled">
                  $ {book.price}
                </Badge>
                <Badge color={book.availability === 0 ? "red.5" : "green.5"} variant="light">
                  {book.availability === 0 ? "Out of stock" : "In Stock"}
                </Badge>
              </Group>
            </Card.Section>
          </Grid.Col>
          <Grid.Col>
            <Card.Section>
              <Text size="sm" color="dimmed" mt="18px">
                {book.description}
              </Text>
            </Card.Section>
          </Grid.Col>
          <Grid.Col>
            <Card.Section>
              <Rating />
            </Card.Section>
          </Grid.Col>

          <Grid.Col span={6}>
            <Button variant="filled" color="orange.4" mx="xs" radius="xl">
              Rate
            </Button>
            <Button variant="filled" color="blue.6" mx="xs" radius="xl">
              Order
            </Button>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default Book;
