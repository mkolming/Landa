import { Box, AspectRatio, Image, Text } from "@chakra-ui/react";
import { Product } from "./_data";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box borderRadius="3px">
      <Image src={product.imageUrl} alt={product.name} />
      <Box p="6">
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          color="gray.700"
          align="center"
        >
          {product.name}
        </Text>
        <Text color="gray.500" align="center">
          {product.currency} {product.price}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
