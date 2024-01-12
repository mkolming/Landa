import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { ProductCard } from "@/components/Shop/ProductCard";
import { products } from "@/components/Shop/_data";
import { ProductGrid } from "@/components/Shop/ProductGrid";

export default function HomeBody() {
  return (
    <ChakraProvider>
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: "2", md: "4", lg: "6" }}
        py={{ base: "3", md: "4", lg: "6" }}
      >
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </Box>
    </ChakraProvider>
  );
}
