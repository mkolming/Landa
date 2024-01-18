import { Box, Text, Image, VStack, SimpleGrid } from "@chakra-ui/react";
import styles from "@/styles/home.module.css";

const AboutPage = () => {
  return (
    <Box p={6} width="80%">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <VStack align="start" spacing={4}>
          <Text className={styles.p} fontSize="5xl">
            Quem somos
          </Text>
          <Text className={styles.p} fontSize="2xl">
            Descrição aqui...
          </Text>
        </VStack>
        <Box>
          <Image borderRadius="md" src="/landa 1.jpg" />
        </Box>
        <Box>
          <Text className={styles.p} fontSize="5xl" mt={6}>
            Exposições
          </Text>
          <Text className={styles.p} fontSize="2xl">
            MERCEDES BENZ FASHION WEEK MADRID 2020...
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default AboutPage;
