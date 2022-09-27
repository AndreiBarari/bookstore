import { Button, Center, Container, Group, TextInput } from "@mantine/core";
import { useNavigate } from "react-router";

function LogIn() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/books`);
  };

  return (
    <Container size="xs" style={{ height: "100vh" }}>
      <Center pt="5em">
        <form style={{ width: "300px" }}>
          <h2>Sign in</h2>
          <TextInput mt="12px" label="Email" withAsterisk placeholder="Email"></TextInput>
          <TextInput mt="12px" label="Password" withAsterisk placeholder="Password"></TextInput>

          <Group position="apart">
            <Button variant="filled" color="blue" mt="md" radius="md" onClick={handleRedirect}>
              Sign In
            </Button>
            <Button variant="filled" color="red" mt="md" radius="md" onClick={handleRedirect}>
              Cancel
            </Button>
          </Group>
        </form>
      </Center>
    </Container>
  );
}

export default LogIn;
