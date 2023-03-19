import { Box, Center, VStack } from "@chakra-ui/react";
import { useFetchDaos } from "@daobox/use-aragon";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Page() {
  const daos = useFetchDaos();

  return (
    <Center>
      <VStack spacing={4} pt={10}>
        <ConnectButton />
        <Box borderRadius="lg" boxShadow="sm" p="6">
          {daos.data && <pre>{JSON.stringify(daos?.data[0], null, 2)}</pre>}
        </Box>
      </VStack>
    </Center>
  );
}

export default Page;
