import {
  Box,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FiGift } from "react-icons/fi";
import styles from "@/styles/home.module.css";

export type CartProductMetaProps = {
  isGiftWrapping?: boolean;
  name: string;
  description: string;
  image: string;
};

export const CartProductMeta = (props: CartProductMetaProps) => {
  const { isGiftWrapping = true, image, name, description } = props;
  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text className={styles.p} fontSize="3xl">
            {name}
          </Text>
          <Text
            className={styles.p}
            fontSize="xl"
            color={mode("gray.600", "gray.400")}
          >
            {description}
          </Text>
        </Stack>
        {isGiftWrapping && (
          <HStack spacing="1" mt="3" color={mode("gray.600", "gray.400")}>
            <Icon as={FiGift} boxSize="4" />
            <Link className={styles.p} fontSize="xl" textDecoration="underline">
              Add gift wrapping
            </Link>
          </HStack>
        )}
      </Box>
    </Stack>
  );
};
