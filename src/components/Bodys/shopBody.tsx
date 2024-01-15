import {
  ChakraProvider,
  Box,
  SimpleGrid,
  VStack,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { products, Product } from "@/components/Shop/_data";
import ProductCard from "../Shop/ProductCard";
import styles from "@/styles/home.module.css";

const ShopBody: React.FC = () => {
  return (
    <ChakraProvider>
      <Flex gap={5} p={5} width="80%">
        <VStack w={{ base: "full", md: "50%" }} spacing={0} align="flex-start">
          <Text className={styles.p} fontSize="6xl">
            SHOP
          </Text>
          <Box borderY="1px" w="100%">
            <Button
              mb={5}
              w="100%"
              className={styles.p}
              fontSize="3xl"
              color="black"
              colorScheme="transparent"
              justifyContent="space-between"
            >
              Filtros
              <Text fontSize="8x1">-</Text>
            </Button>

            <Button
              w="100%"
              className={styles.p}
              fontSize="4xl"
              color="black"
              colorScheme="transparent"
              justifyContent="flex-start"
            >
              Todos
            </Button>
            <Button
              w="100%"
              className={styles.p}
              fontSize="2xl"
              color="black"
              colorScheme="transparent"
              justifyContent="flex-start"
            >
              COLEÇÃO 1
            </Button>
            <Button
              w="100%"
              className={styles.p}
              fontSize="2xl"
              color="black"
              colorScheme="transparent"
              justifyContent="flex-start"
            >
              COLEÇÃO 2
            </Button>
            <Button
              w="100%"
              className={styles.p}
              fontSize="2xl"
              color="black"
              colorScheme="transparent"
              justifyContent="flex-start"
            >
              COLEÇÃO 3
            </Button>
          </Box>
        </VStack>

        <Box>
          <SimpleGrid columns={3} spacing={5}>
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default ShopBody;
