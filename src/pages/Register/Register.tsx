import { useToggle, upperFirst } from "@mantine/hooks";
import { NavLink, useNavigate } from "react-router-dom";

import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Checkbox,
  Anchor,
  Stack,
  Center,
  Radio,
  Container,
} from "@mantine/core";

export function Register() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/books");
  };
  const [type, toggle] = useToggle(["register", "login"]);

  return (
    <Center>
      <Container size="xs">
        <Paper radius="md" p="xl" mt="48px" withBorder>
          <Text size="lg" weight={500}>
            Please {type} with:
          </Text>

          <form onSubmit={handleRedirect}>
            <Stack>
              {type === "register" && (
                <Group position="apart" mt="8px">
                  <TextInput label="First name" placeholder="First name" required withAsterisk />
                  <TextInput label="Last name" placeholder="Last name" required withAsterisk />
                </Group>
              )}

              <TextInput label="Email" placeholder="Email" required withAsterisk />

              <PasswordInput label="Password" placeholder="Password" required withAsterisk />
              {type === "register" && (
                <PasswordInput
                  label="Confirm password"
                  placeholder="Confirm password"
                  required
                  withAsterisk
                />
              )}
              {type === "register" && (
                <Radio.Group name="gender" label="Gender" withAsterisk required>
                  <Radio value="male" label="Male" />
                  <Radio value="female" label="Female" />
                  <Radio value="noMention" label="Prefer not to say" />
                </Radio.Group>
              )}

              {type === "register" && <Checkbox label="I accept terms and conditions" required />}
            </Stack>

            <Group position="apart" mt="xl">
              <Anchor
                component="button"
                type="button"
                color="dimmed"
                onClick={() => toggle()}
                size="xs"
              >
                {type === "register"
                  ? "Already have an account? Login"
                  : "Don't have an account? Register"}
              </Anchor>
              <Button type="submit">{upperFirst(type)}</Button>
              <Button color="red.5" onClick={handleRedirect}>
                Cancel
              </Button>
            </Group>
          </form>
        </Paper>
      </Container>
    </Center>
  );
}
