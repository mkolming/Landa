import { ChakraProvider, Flex } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  Image,
  Box,
  Stack,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <ChakraProvider>
      <Center>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Center boxSize="300px">
            <Image src="landa logo.JPG" alt="Logo" />
          </Center>
          <Tabs size="lg">
            <TabList gap="80px">
              <Tab>HOME</Tab>
              <Tab>SHOP</Tab>
              <Tab>COLLEÇÕES</Tab>
              <Tab>SOBRE</Tab>
              <Tab>CONTATO</Tab>
            </TabList>

            <TabPanels></TabPanels>
          </Tabs>
        </Flex>
      </Center>
    </ChakraProvider>
  );
}
