import {
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { formatPrice } from "./PriceTag";
import styles from "@/styles/home.module.css";

type OrderSummaryItemProps = {
  label: string;
  value?: string;
  children?: React.ReactNode;
};

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text
        className={styles.p}
        fontSize="xl"
        color={mode("gray.600", "gray.400")}
      >
        {label}
      </Text>
      {value ? (
        <Text className={styles.p} fontSize="2xl">
          {value}
        </Text>
      ) : (
        children
      )}
    </Flex>
  );
};

export const CartOrderSummary = () => {
  return (
    <ChakraProvider>
      <Stack
        spacing="8"
        borderWidth="1px"
        rounded="lg"
        padding="8"
        width="full"
      >
        <Text className={styles.p} fontSize="4xl">
          Order Summary
        </Text>

        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={formatPrice(597)} />
          <OrderSummaryItem label="Shipping + Tax">
            <Link
              className={styles.p}
              fontSize="xl"
              href="#"
              textDecor="underline"
            >
              Calculate shipping
            </Link>
          </OrderSummaryItem>
          <OrderSummaryItem label="Coupon Code">
            <Link
              className={styles.p}
              fontSize="xl"
              href="#"
              textDecor="underline"
            >
              Add coupon code
            </Link>
          </OrderSummaryItem>
          <Flex justify="space-between">
            <Text className={styles.p} fontSize="xl">
              Total
            </Text>
            <Text className={styles.p} fontSize="3xl">
              {formatPrice(597)}
            </Text>
          </Flex>
        </Stack>
        <Button colorScheme="blue" className={styles.p} fontSize="2xl">
          Checkout
        </Button>
      </Stack>
    </ChakraProvider>
  );
};
