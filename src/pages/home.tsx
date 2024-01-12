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
              >
                <Tab>HOME</Tab>
                <Tab>SHOP</Tab>
                <Tab>COLEÇÕES</Tab>
                <Tab>SOBRE</Tab>
                <Tab>CONTATO</Tab>
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
