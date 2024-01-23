import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { DataModel } from "../Hooks/types";
import styles from "@/styles/home.module.css";
import { removeFromCart } from "../Cart/cart-utils";

interface DrawerModelProps {
  setTabIndex: (index: number) => void;
}

function DrawerModel({ setTabIndex }: DrawerModelProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cartItems, setCartItems] = useState<DataModel[]>([]);
  const btnRef = useRef<HTMLButtonElement>(null);

  const goToNewPage = () => {
    setTabIndex(5);
    onClose();
  };

  const fetchCartItems = () => {
    const cart = Cookies.get("cart");
    setCartItems(cart ? JSON.parse(cart) : []);
  };

  useEffect(() => {
    if (isOpen) {
      fetchCartItems();
    }
  }, [isOpen]);

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId, setCartItems);
  };

  return (
    <>
      <Button
        className={styles.p}
        fontSize="2xl"
        position="absolute"
        right="20%"
        top="15%"
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        Cart
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className={styles.p} fontSize="2xl">
            Cart
          </DrawerHeader>
          <DrawerBody>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  key={item.id}
                  p={4}
                  borderBottom="1px"
                  borderColor="gray.200"
                >
                  <Image
                    borderRadius={4}
                    maxW="30%"
                    src={item.image}
                    alt={item.nome}
                  />
                  <Box>
                    <Text className={styles.p} fontSize="xl">
                      {item.nome}
                    </Text>
                    <Text className={styles.p} fontSize="xl">
                      Preço: {item.currency}
                      {item.price}
                    </Text>
                  </Box>
                  <Button onClick={() => handleRemoveFromCart(item.id)}>
                    X
                  </Button>
                </Box>
              ))
            ) : (
              <Text className={styles.p} fontSize="xl">
                O carrinho está vazio.
              </Text>
            )}
          </DrawerBody>
          <DrawerFooter>
            <Button
              className={styles.p}
              fontSize="2xl"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className={styles.p}
              fontSize="2xl"
              colorScheme="blue"
              onClick={goToNewPage}
            >
              Carrinho
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerModel;
