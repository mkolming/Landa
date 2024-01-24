import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Stack,
  Image,
  Flex,
  CloseButton,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { getCartItems, getTotalPrice, removeFromCart } from "./cart-utils";
import { DataModel } from "../Hooks/types";

import Cookies from "js-cookie";

const Cart = () => {
  const [cartItems, setCartItems] = useState<DataModel[]>([]);
  const [totalPrice, setTotalPrice] = useState("0.00");

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
  }, []);

  useEffect(() => {
    const total = getTotalPrice(cartItems);
    setTotalPrice(total);
  }, [cartItems]);

  const handleRemoveFromCart = (productId: number) => {
    const newCartItems = removeFromCart(productId);
    setCartItems(newCartItems);
  };

  const saveCartToBackend = async () => {
    const cleanCartItems = cartItems.map((item) => ({
      nome: item.nome,
      image: item.image,
      currency: item.currency,
      price: item.price,
      sell_status: item.sell_status,
      colection: item.colection,
      description: item.description,
    }));

    try {
      const response = await fetch("http://127.0.0.1:8000/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cleanCartItems }),
      });

      if (!response.ok) {
        throw new Error("Não foi possível salvar o carrinho");
      }

      const responseData = await response.json();
      console.log("Carrinho salvo com sucesso. ID:", responseData.cart_id);
    } catch (error) {
      console.error("Erro ao salvar o carrinho:", error);
    }
  };

  const [checkoutDetails, setCheckoutDetails] = useState({
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setCheckoutDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleCheckout = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const cartItems = getCartItems();
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems, details: checkoutDetails }),
      });
  
      if (!response.ok) {
        throw new Error('Erro no HOOK');
      }
      Cookies.remove('cart');
      setCartItems([]);

    } catch (error) {
      console.error('Erro no checkout:', error);
    }
  };
  return (
    <Flex minH="400px" w="50%" justifyContent="space-between">
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
        <Box>
          <form onSubmit={handleCheckout}>
            <input
              type="text"
              name="nome"
              value={checkoutDetails.nome}
              onChange={handleInputChange}
              placeholder="Nome completo"
              required
            />
            <input
              type="email"
              name="email"
              value={checkoutDetails.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="cpf"
              value={checkoutDetails.cpf}
              onChange={handleInputChange}
              placeholder="CPF"
              required
            />
            <textarea
              name="endereco"
              value={checkoutDetails.endereco}
              onChange={handleInputChange}
              placeholder="Endereço de entrega"
              required
            />
            <Button colorScheme="blue" type="submit">Finalizar Compra</Button>
        </form>
        </Box>
        <Text fontSize="lg" fontWeight="bold">
          Total: {`R$ ${totalPrice}`}
        </Text>
        <Button colorScheme="blue" onClick={saveCartToBackend}>
          Checkout
        </Button>
      </Box>
    </Flex>
  );
};

export default Cart;
