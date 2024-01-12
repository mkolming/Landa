import * as React from "react";
import HeaderHome from "@/components/Header/header";
import HomeBody from "@/components/Bodys/homebody";
import ShopBody from "@/components/Bodys/shopBody";
import ColectionsBody from "@/components/Bodys/colectionsBody";
import AboutBody from "@/components/Bodys/aboutBody";
import ContactBody from "@/components/Bodys/contactBody";
import Footer from "@/components/Footer/footer";
import styles from "@/styles/home.module.css";
import {
  ChakraProvider,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

function Home() {
  return (
    <>
      <div className={styles.background}>
        <HeaderHome />
        <ChakraProvider>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Tabs isLazy size="lg" width="100%">
              <TabList
                borderBottom="none"
                gap="80px"
                justifyContent="center"
                mb="5"
                height={8}
                marginBottom={10}
              >
                <Tab
                  borderBottom="2px solid #CBD5E0"
                  _selected={{ borderBottom: "3px solid #3182CE" }}
                >
                  <Text fontFamily="Menlo">HOME</Text>
                </Tab>
                <Tab
                  borderBottom="2px solid #CBD5E0"
                  _selected={{ borderBottom: "3px solid #3182CE" }}
                >
                  <Text>SHOP</Text>
                </Tab>
                <Tab
                  borderBottom="2px solid #CBD5E0"
                  _selected={{ borderBottom: "3px solid #3182CE" }}
                >
                  <Text>COLEÇÕES</Text>
                </Tab>
                <Tab
                  borderBottom="2px solid #CBD5E0"
                  _selected={{ borderBottom: "3px solid #3182CE" }}
                >
                  <Text>SOBRE</Text>
                </Tab>
                <Tab
                  borderBottom="2px solid #CBD5E0"
                  _selected={{ borderBottom: "3px solid #3182CE" }}
                >
                  <Text>CONTATO</Text>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={0}>
                  <HomeBody />
                </TabPanel>
                <TabPanel>
                  <ShopBody />
                </TabPanel>
                <TabPanel>
                  <ColectionsBody />
                </TabPanel>
                <TabPanel>
                  <AboutBody />
                </TabPanel>
                <TabPanel>
                  <ContactBody />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </ChakraProvider>

        <Footer />
      </div>
    </>
  );
}

export default Home;
