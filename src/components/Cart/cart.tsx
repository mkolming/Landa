import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Stack,
  Image,
  Flex,
  Divider,
  CloseButton,
} from "@chakra-ui/react";
import { getCartItems, getTotalPrice } from "./cart-utils";
import { DataModel } from "../Hooks/types";
import { removeFromCart } from "../Cart/cart-utils";

const Cart = () => {
  const [cartItems, setCartItems] = useState<DataModel[]>([]);
  const [totalPrice, setTotalPrice] = useState("0.00");

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
    const total = getTotalPrice(items);
    setTotalPrice(total);
  }, []);

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId, setCartItems);
  };

  return (
    <Flex w="50%" justifyContent="space-between">
      <Stack spacing={8}>
        <Box>
          {cartItems.length === 0 ? (
            <Text>O carrinho está vazio.</Text>
          ) : (
            cartItems.map((item) => (
              <Flex
                key={item.id}
                align="center"
                justify="space-between"
                p={4}
                borderBottom="1px solid"
                borderColor="gray.200"
              >
                <Image
                  src={item.image}
                  alt={item.nome}
                  boxSize="100px"
                  objectFit="cover"
                  mr={2}
                />

                <Box pl={5}>
                  <Text fontWeight="bold">{item.nome}</Text>
                  <Text fontSize="sm">{`${item.currency} ${item.price.toFixed(
                    2
                  )}`}</Text>
                </Box>
                <CloseButton onClick={() => handleRemoveFromCart(item.id)} />
              </Flex>
            ))
          )}
        </Box>
      </Stack>
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          Total: {`R$ ${totalPrice}`}
        </Text>
        <Button colorScheme="blue">Checkout</Button>
      </Box>
    </Flex>
  );
};

export default Cart;
