import { Center, Loader, Text, Space } from "@mantine/core";

function Error() {
  return (
    <Center style={{ width: "100%", height: "95vh" }}>
      <div>
        <Text size="xl" weight={700} align="center">
          Error
        </Text>
        <Space h="md" />
        <Text size="md" weight={700} align="center" color="gray.5">
          Oops, something went wrong. Please try again later!
        </Text>
      </div>
    </Center>
  );
}

export default Error;
