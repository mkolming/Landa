import {
  ChakraProvider,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Center,
  Image,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <ChakraProvider>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
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
        </Tabs>
      </Flex>
    </ChakraProvider>
  );
}
