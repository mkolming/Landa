import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Textarea,
  VStack,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import styles from "@/styles/home.module.css";

export default function HomeBody() {
  return (
    <Box p={6} w="60%">
      <SimpleGrid columns={{ base: 1, lg: 1 }} spacing={10}>
        <VStack spacing={5}>
          <Text w="80%" className={styles.p} fontSize="2xl" align="center">
            Se estás interessado em nossas peças e quer fazer um pedido, ou
            desejas um encargo personalizado ou queres fazer qualquer outra
            consulta, não dudes em ponerte em contato conosco!
          </Text>
          <FormControl isRequired>
            <FormLabel className={styles.p} fontSize="2xl">
              Nome
            </FormLabel>
            <Input placeholder="Seu nome" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel className={styles.p} fontSize="2xl">
              Email
            </FormLabel>
            <Input placeholder="Seu email" />
          </FormControl>
          <FormControl>
            <FormLabel className={styles.p} fontSize="2xl">
              Assunto
            </FormLabel>
            <Input placeholder="Assunto" />
          </FormControl>
          <FormControl>
            <FormLabel className={styles.p} fontSize="2xl">
              Mensagem
            </FormLabel>
            <Textarea placeholder="Sua mensagem" />
          </FormControl>
          <Checkbox defaultChecked className={styles.p}>
            Aceito os termos e condições
          </Checkbox>
          <Button
            className={styles.p}
            fontSize="2xl"
            colorScheme="blue"
            size="lg"
          >
            Enviar
          </Button>
        </VStack>

        <Flex justifyContent="center">
          <Image w="15%" src="/imgItems/ce3.jpg" />
          <Image w="15%" src="/imgItems/mp2.jpg" />
          <Image w="15%" src="/imgItems/ce1.jpg" />
          <Image w="15%" src="/imgItems/ce3.jpg" />
          <Image w="15%" src="/imgItems/mp2.jpg" />
          <Image w="15%" src="/imgItems/ce1.jpg" />
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
