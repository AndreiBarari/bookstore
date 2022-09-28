import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  NavLink as MantineNavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const HEADER_HEIGHT = 84;

const useStyles = createStyles(theme => ({
  root: {
    position: "sticky",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export function Navigation() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <NavLink to="/admin">
          <MantineNavLink label={<Logo />} py={4} px={2} />
        </NavLink>
        <Group spacing={5} className={classes.links}>
          <NavLink to="/">
            <MantineNavLink label="Home" py={8} px={6} />
          </NavLink>
          <NavLink to="/books">
            <MantineNavLink label="Books" py={8} px={6} />
          </NavLink>
          <NavLink to="/about">
            <MantineNavLink label="About" py={8} px={6} />
          </NavLink>
          <NavLink to="/register">
            <MantineNavLink label="LogIn/Register" py={8} px={6} />
          </NavLink>
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {styles => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              <NavLink to="/">
                <MantineNavLink label="Home" py={8} px={6} />
              </NavLink>
              <NavLink to="/books">
                <MantineNavLink label="Books" py={8} px={6} />
              </NavLink>
              <NavLink to="/about">
                <MantineNavLink label="About" py={8} px={6} />
              </NavLink>
              <NavLink to="/register">
                <MantineNavLink label="LogIn/Register" py={8} px={6} />
              </NavLink>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
