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

const ShopBody: React.FC = () => {
  return (
    <ChakraProvider>
      <Flex gap={6} p={5} width="80%">
        <VStack w={{ base: "full", md: "20%" }} spacing={1} align="flex-start">
          <Text fontSize="xl" fontWeight="bold">
            SHOP
          </Text>
          <Button color="black" colorScheme="transparent">
            Todos
          </Button>
          <Button color="black" colorScheme="transparent">
            COLEÇÃO 1
          </Button>
          <Button color="black" colorScheme="transparent">
            COLEÇÃO 2
          </Button>
          <Button color="black" colorScheme="transparent">
            COLEÇÃO 3
          </Button>
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
