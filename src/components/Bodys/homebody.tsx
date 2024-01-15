import {
  ChakraProvider,
  Text,
  Button,
  Box,
  Heading,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import styles from "@/styles/home.module.css";

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
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image src="mestre passos.jpg" objectFit="cover" />
        </AspectRatio>
        <Box
          position="absolute"
          top="30%"
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
            bgColor="rgba(255, 255, 255, 0.3)"
            borderRadius={4}
            p={5}
            borderWidth={5}
          >
            <Text className={styles.p} fontSize="6xl">
              MESTRE PASSOS
            </Text>
            <Text className={styles.p} fontSize="3xl">
              COLEÇÃO
            </Text>
          </Box>
          <Button
            className={styles.p}
            fontSize="3xl"
            borderRadius={4}
            color="black"
            variant="solid"
            bgColor="rgba(255, 255, 255, 0.5)"
            _hover={{ bgColor: "rgba(255, 255, 255, 0.7)" }}
            size="lg"
          >
            COMPRAR
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
