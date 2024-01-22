import { Box, Image, Text } from "@chakra-ui/react";
import styles from "@/styles/home.module.css";
import React, { useState, useEffect } from "react";
import { DataModel } from '../Hooks/types';

interface ProductCardProps {
  product: DataModel;
  onProductClick: (product: DataModel) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onProductClick,
}) => {
  return (
    <Box borderRadius="3px" onClick={() => onProductClick(product)}>
      <Image src={product.image} alt={product.nome} />
      <Box p="6">
        <Text
          className={styles.p}
          fontSize="x-large"
          color="gray.900"
          align="center"
        >
          {product.nome}
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
