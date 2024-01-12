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
    <ChakraProvider>
      <Box bg="#fff4e7">
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <Text fontWeight={"bold"}>PRE-SALE FAQS</Text>
              <Link href={"#"}>Submit a Ticket</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <Text fontWeight={"bold"}>SERVICES</Text>
              <Link href={"#"}>Theme Tweak</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <Text fontWeight={"bold"}>SHOWCASE</Text>
              <Link href={"#"}>Widget Kit</Link>
              <Link href={"#"}>Support</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <Text fontWeight={"bold"}>ABOUT US</Text>
              <Link href={"#"}>Contact Us</Link>
              <Link href={"#"}>Resources</Link>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text>
              © {new Date().getFullYear()} Company. All rights reserved.
            </Text>
            <Stack direction={"row"} spacing={6}></Stack>
          </Container>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Footer;
