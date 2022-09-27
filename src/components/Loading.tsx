import { Center, Loader, Text, Space } from "@mantine/core";

function Loading() {
  return (
    <Center style={{ width: "100%", height: "70vh" }}>
      <div>
        <Text size="xl" weight={700} align="center">
          Page loading. Thank you for your patience!
        </Text>
        <Space h="xl" />
        <Center>
          <Loader color="#de8c3c" size="xl" />
        </Center>
      </div>
    </Center>
  );
}

export default Loading;
