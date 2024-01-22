import {
  ChakraProvider,
  Box,
  SimpleGrid,
  VStack,
  Button,
  Flex,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Image,
  Divider,
  List,
  ListItem,
  ModalFooter,
} from "@chakra-ui/react";
import ProductCard from "../Shop/ProductCard";
import styles from "@/styles/home.module.css";
import React, { useState, useEffect } from "react";
import { DataModel } from '../Hooks/types';
import { addToCart, getCart } from "../Cart/cart-utils";

const ShopBody: React.FC = () => {
  const [dataModels, setDataModels] = useState<DataModel[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<DataModel | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showItems, setShowItems] = useState(true);
  const [HideShow, setHideShow] = useState(true);
  const [currentFilter, setCurrentFilter] = useState<string | null>(null);
  const [cart, setCart] = useState<DataModel[]>(getCart());

  const openModal = (product: DataModel) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const toggleItems = () => {
    setShowItems(!showItems);
    setHideShow(!HideShow);
  };

  
  useEffect(() => {
    const fetchDataModels = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/data-models"); // Sua URL da API
        const data = await response.json();
        setDataModels(data);
      } catch (error) {
        console.error("Erro ao buscar DataModels:", error);
      }
    };

    fetchDataModels();
  }, []);

  const handleFilterChange = (filter: string | null) => {
    setCurrentFilter(filter);
  };

  const filteredDataModels = currentFilter
    ? dataModels.filter((model) => model.colection === currentFilter)
    : dataModels;

  function handleAddToCart(product: DataModel): void {
    addToCart(product, () => {
      setCart(getCart());
      setIsModalOpen(false);
    });
  }

  return (
    <ChakraProvider>
      <Flex gap={5} p={5} width="80%">
        <VStack w={{ base: "full", md: "50%" }} spacing={0} align="flex-start">
          <Text className={styles.p} fontSize="6xl">
            SHOP
          </Text>
          <Box borderY="1px" maxW="166px" w="100%">
            <Button
              w="100%"
              className={styles.p}
              fontSize="3xl"
              color="black"
              colorScheme="transparent"
              justifyContent="space-between"
            >
              Filtros
              <Text onClick={toggleItems} fontSize="8x1">
                -
              </Text>
            </Button>
            <Box
              className={`${styles.itemsContent} ${
                showItems ? styles.itemsContentVisible : ""
              }`}
            >
              <Button
                mt={5}
                w="100%"
                className={styles.p}
                fontSize="4xl"
                color="black"
                colorScheme="transparent"
                justifyContent="flex-start"
                onClick={() => handleFilterChange(null)}
              >
                Todos
              </Button>
              <Button
                w="100%"
                className={styles.p}
                fontSize="2xl"
                color="black"
                colorScheme="transparent"
                justifyContent="flex-start"
                onClick={() => handleFilterChange("1")}
              >
                cerâmica esmaltada
              </Button>
              <Button
                w="100%"
                className={styles.p}
                fontSize="2xl"
                color="black"
                colorScheme="transparent"
                justifyContent="flex-start"
                onClick={() => handleFilterChange("2")}
              >
                Mestre Passos
              </Button>
              <Button
                w="100%"
                className={styles.p}
                fontSize="2xl"
                color="black"
                colorScheme="transparent"
                justifyContent="flex-start"
                onClick={() => handleFilterChange("3")}
              >
                Florescer
              </Button>
            </Box>
          </Box>
        </VStack>

        <Box>
          <SimpleGrid columns={3} spacing={10}>
            {filteredDataModels.map((model) => (
              <ProductCard
                key={model.id}
                product={model}
                onProductClick={openModal} // Certifique-se de que openModal aceita um DataModel e atualiza o estado
              />
            ))}
          </SimpleGrid>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            size="4xl"
            isCentered
          >
            <ModalOverlay />
            <ModalContent bgColor="#fff4e7" px={5} pt={5} pb={2}>
              <ModalHeader className={styles.p} fontSize="4xl">
                {selectedProduct?.nome}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box display="flex">
                  <Box flexShrink={0}>
                    <Image
                      borderRadius="md"
                      src={selectedProduct?.image}
                      alt={selectedProduct?.nome}
                      boxSize="500px"
                      objectFit="cover"
                      mr={6}
                    />
                  </Box>
                  <Box flexGrow={1}>
                    <Text className={styles.p} fontSize="3xl" mb={2}>
                      <Text as="span" fontWeight="bold">
                        Preço :{" "}
                      </Text>
                      {selectedProduct?.currency}
                      {selectedProduct?.price}
                    </Text>
                    <Divider mb={2} />
                    <Text
                      className={styles.p}
                      fontSize="2xl"
                      fontWeight="bold"
                      mb={2}
                    >
                      Características : {selectedProduct?.nome}
                    </Text>
                    <List spacing={2}>
                      <ListItem className={styles.p} fontSize="2xl">
                        Material : {selectedProduct?.nome}
                      </ListItem>
                    </List>
                    <Text className={styles.p} fontSize="2xl" mt={4}>
                      {selectedProduct?.description}
                    </Text>
                  </Box>
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button
                  className={styles.p}
                  fontSize="2xl"
                  colorScheme="yellow"
                  mr={3}
                  onClick={() => selectedProduct && handleAddToCart(selectedProduct)}
                >
                  Adicionar ao carrinho
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default ShopBody;

