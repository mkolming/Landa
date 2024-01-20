import {
  ChakraProvider,
  Box,
  SimpleGrid,
  VStack,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import ProductCard from "../Shop/ProductCard";
import styles from "@/styles/home.module.css";
import React, { useState, useEffect } from "react";

interface DataModel {
  id: number;
  nome: string;
  currency: string;
  price: number;
  image: string;
  colection: string;
}

const ShopBody: React.FC = () => {
  const [dataModels, setDataModels] = useState<DataModel[]>([]);
  const [showItems, setShowItems] = useState(true);
  const [HideShow, setHideShow] = useState(true);

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

  return (
    <ChakraProvider>
      <Flex gap={5} p={5} width="80%">
        <VStack w={{ base: "full", md: "50%" }} spacing={0} align="flex-start">
          <Text className={styles.p} fontSize="6xl">
            SHOP
          </Text>
          <Box borderY="1px" w="100%">
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
              >
                Florescer
              </Button>
            </Box>
          </Box>
        </VStack>

        <Box>
          <SimpleGrid columns={3} spacing={5}>
            {dataModels.map((model) => (
              <ProductCard key={model.id} product={model} />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default ShopBody;
