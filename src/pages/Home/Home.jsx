import { createStyles, Overlay, Container, Title, Button, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";

const useStyles = createStyles(theme => ({
  hero: {
    position: "relative",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },

  container: {
    height: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

export function Home() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Books suited for all your needs</Title>
        <Text className={classes.description} size="xl" mt="xl">
          "It wasn't until I started reading and found books they wouldn't let us read in school
          that I discovered you could be insane and happy and have a good life without being like
          everybody else."
        </Text>
        <Text className={classes.description} size="xl" mt="xl">
          – John Waters
        </Text>
        <NavLink to="/Books">
          <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
            Continue reading
          </Button>
        </NavLink>
      </Container>
    </div>
  );
}
