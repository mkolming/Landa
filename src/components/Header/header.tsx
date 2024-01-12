import { ChakraProvider, Flex, Center, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <ChakraProvider>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Center boxSize="300px">
          <Image src="landa logo.JPG" alt="Logo" />
        </Center>
      </Flex>
    </ChakraProvider>
  );
}
