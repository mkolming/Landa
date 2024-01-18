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
} from "@chakra-ui/react";
import React, { useRef } from "react";

interface DrawerModelProps {
  setTabIndex: (index: number) => void;
}

function DrawerModel({ setTabIndex }: DrawerModelProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const goToNewPage = () => {
    setTabIndex(5);
    onClose();
  };

  return (
    <>
      <Button
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
          <DrawerHeader>Cart</DrawerHeader>
          <DrawerBody></DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={goToNewPage}>
              Carrinho
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerModel;
