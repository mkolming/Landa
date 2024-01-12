import {
  ChakraProvider,
  Text,
  Flex,
  Card,
  Button,
  Box,
  CardBody,
  Heading,
} from "@chakra-ui/react";

export default function HomeBody() {
  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="end"
        width="100%"
        bgImage="url('landa 1.jpg')"
        bgPosition="center"
        bgSize="cover"
        px={300}
        py={500}
        mb={2}
        gap={30}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={5}>
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
