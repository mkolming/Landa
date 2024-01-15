import {
  ChakraProvider,
  Box,
  Container,
  Stack,
  Text,
  Link,
  SimpleGrid,
  Image,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
function Footer() {
  return (
    <Box
      bg="#fff4e7"
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Container as={Stack} maxW={"7xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Text fontWeight={"bold"}>FAQS</Text>
            <Link href={"#"}>Pagamento</Link>
            <Link href={"#"}>Garantia</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight={"bold"}>SERVIÇOS</Text>
            <Link href={"#"}>Loja</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight={"bold"}>COLEÇÕES</Text>
            <Link href={"#"}>Cerâmica esmaltada</Link>
            <Link href={"#"}>Mestre Passos</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight={"bold"}>ABOUT US</Text>
            <Link href={"#"}>Sobre</Link>
            <Link href={"#"}>Contato</Link>
          </Stack>
          <Image src="/landa logo.jpg" w="70%" />
        </SimpleGrid>
      </Container>

      <Box>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© {new Date().getFullYear()} Landa. All rights reserved.</Text>
          <Stack direction={"row"} spacing={6}></Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
