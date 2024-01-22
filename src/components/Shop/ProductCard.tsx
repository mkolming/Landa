import { Box, Image, Text } from "@chakra-ui/react";
import styles from "@/styles/home.module.css";
import React, { useState, useEffect } from "react";

interface DataModel {
  id: number;
  nome: string;
  image: string;
  currency: string;
  price: number;
  sell_status: string;
  description: string;
  colection: string;
}

interface ProductCardProps {
  product: DataModel;
}

const ProductCard: React.FC<{ product: DataModel }> = ({ product }) => {
  return (
    <Box borderRadius="3px">
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
