import {
  ChakraProvider,
  Text,
  Button,
  Box,
  Heading,
  Image,
  useColorModeValue,
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
            bgColor="rgba(255, 255, 139, 0.5)"
            borderRadius="10"
            p={5}
          >
            <Heading size="xl">MESTRE PASSOS</Heading>
            <Text fontSize="3xl">COLEÇÃO</Text>
          </Box>
          <Button
            color="black"
            variant="solid"
            bgColor="yellow.500"
            _hover={{ bgColor: "yellow.600" }}
            opacity="0.6"
            size="lg"
          >
            COMPRAR
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
