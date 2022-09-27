import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from "@mantine/core";

import { mockdata } from "./data";

const useStyles = createStyles(theme => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export function About() {
  const { classes } = useStyles();
  const features = mockdata.map(feature => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
      <Text size="lg" weight={500} mt="md" color="blue.8">
        {feature.icon}
      </Text>
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg">
          The Book Spot
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        About us: Who we are? What we believe?
      </Title>

      <Text color="dimmed" className={classes.description} align="center" mt="md">
        On a beautiful boulevard, our bookstore is the ideal place for a quick stop after a stroll
        in the park. Decorated with beautiful light fixtures in an industrial style, this bookstore
        also has a little teahouse where you can enjoy a cup of coffee or tea as you browse through
        the pages of your favourite books.
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
