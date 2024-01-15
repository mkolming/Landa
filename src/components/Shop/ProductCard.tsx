import { Box, AspectRatio, Image, Text } from "@chakra-ui/react";
import { Product } from "./_data";
import styles from "@/styles/home.module.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box borderRadius="3px">
      <Image src={product.imageUrl} alt={product.name} />
      <Box p="6">
        <Text
          className={styles.p}
          fontSize="x-large"
          color="gray.900"
          align="center"
        >
          {product.name}
        </Text>
        <Text
          className={styles.p}
          fontSize="x-large"
          color="gray.600"
          align="center"
        >
          {product.currency} {product.price}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
