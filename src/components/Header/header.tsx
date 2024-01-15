import { ChakraProvider, Flex, Center, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Center p={10} boxSize="280px">
        <Image src="landa logo.JPG" alt="Logo" />
      </Center>
    </Flex>
  );
}
