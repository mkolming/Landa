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
import { useNavigate } from "@/hooks/navigate";

const Cart = () => {
  const [cartItems, setCartItems] = useState<DataModel[]>([]);
  const [totalPrice, setTotalPrice] = useState("0.00");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const navigate = useNavigate();

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
    const payload = {
      items: cleanCartItems,
      nome: nome,
      totalPrice: totalPrice,
      cpf: cpf,
      email: email,
      phone: phone,
      adress: adress,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Não foi possível salvar o carrinho");
      }

      const responseData = await response.json();
      console.log("Carrinho salvo com sucesso. ID:", responseData.cart_id);
      localStorage.setItem("cartId", String(responseData.cart_id));
      navigate("/pagamento");
    } catch (error) {
      console.error("Erro ao salvar o carrinho:", error);
    }
  };

  return (
    <Flex minH="400px" w="80%" justifyContent="space-between">
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
        <Box w="50%">
          <Input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
          />
          <Input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF"
          />
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefone"
          />
          <Input
            type="text"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
            placeholder="Endereço"
          />
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
