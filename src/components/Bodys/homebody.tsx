import {
  ChakraProvider,
  Text,
  Button,
  Box,
  Heading,
  Image,
} from "@chakra-ui/react";

export default function HomeBody() {
  return (
    <ChakraProvider>
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={5}
      >
        <Image src="landa 1.jpg" width="100%" />
        <Box
          position="absolute"
          top="40%"
          transform="translateX(150%)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={5}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            bg="lightgoldenrodyellow"
            borderRadius="15"
            p={5}
          >
            <Heading size="xl">MESTRE PASSOS</Heading>
            <Text fontSize="3xl">COLEÇÃO</Text>
          </Box>
          <Button colorScheme="yellow" size="lg">
            COMPRAR
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
