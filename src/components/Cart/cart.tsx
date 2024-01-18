import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { CartItem } from "@/components/Cart/CartItem";
import { CartOrderSummary } from "@/components/Cart/CartOrderSummary";
import { cartData } from "@/components/Cart/_data";
import styles from "@/styles/home.module.css";

export default function Cart() {
  return (
    <ChakraProvider>
      <Box
        maxW={{ base: "3xl", lg: "7xl" }}
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "flex-start" }}
          spacing={{ base: "8", md: "16" }}
        >
          <Stack spacing={{ base: "8", md: "10" }} flex="2">
            <Text className={styles.p} fontSize="4xl">
              Shopping Cart (3 items)
            </Text>

            <Stack spacing="6">
              {cartData.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p className={styles.p}>or</p>
              <Link
                className={styles.p}
                fontSize="xl"
                color={mode("blue.500", "blue.200")}
              >
                Continue shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </ChakraProvider>
  );
}
