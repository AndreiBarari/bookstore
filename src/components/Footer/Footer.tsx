import { Text, Container, ActionIcon, Group } from "@mantine/core";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube";
import { data } from "./data";
import { useStyles } from "./useStylesFooter";

export function Footer() {
  const { classes } = useStyles();

  const groups = data.map(group => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={event => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text size="xs" color="dimmed" className={classes.description}>
            In the case of good books, the point is not to see how many of them you can get through,
            but rather how many can get through to you.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2022 Bookstore
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <Facebook />
          </ActionIcon>
          <ActionIcon size="lg">
            <Twitter />
          </ActionIcon>
          <ActionIcon size="lg">
            <YouTube />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
