import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Global, css } from "@emotion/react";
import ContactBody from "../Bodys/contactBody";
import ColectionsBody from "../Bodys/colectionsBody";
import ShopBody from "../Bodys/shopBody";
import AboutBody from "../Bodys/aboutBody";
import HomeBody from "../Bodys/homebody";
import styles from "@/styles/home.module.css";
import Cart from "../Cart/cart";

const GlobalStyles = () => (
  <Global
    styles={css`
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `}
  />
);

interface TabsHomeProps {
  tabIndex: number;
  setTabIndex: (index: number) => void;
}

const TabsHome: React.FC<TabsHomeProps> = ({ tabIndex, setTabIndex }) => {
  const [animatingOut, setAnimatingOut] = useState(false);

  const handleTabsChange = (index: number) => {
    setAnimatingOut(true);
    setTimeout(() => {
      setTabIndex(index);
      setAnimatingOut(false);
    }, 700);
  };

  const goToNewPage = () => {
    setAnimatingOut(true);
    setTimeout(() => {
      setTabIndex(5); // O índice 5 representa a nova página/tab
      setAnimatingOut(false);
    }, 700);
  };

  return (
    <>
      <GlobalStyles />
      <Tabs
        index={tabIndex}
        onChange={handleTabsChange}
        isLazy
        size="lg"
        width="100%"
      >
        <TabList
          borderBottom="none"
          gap={5}
          justifyContent="center"
          mb="5"
          height={8}
          marginBottom={10}
        >
          <Tab
            _hover={{
              borderTop: "3px solid #3182CE",
              transition: "background-color 0.4s ease-in-out",
            }}
            borderTop="2px solid #CBD5E0"
            width={150}
            _selected={{ borderTop: "3px solid #3182CE" }}
          >
            <Text pt={5} className={styles.fonte}>
              HOME
            </Text>
          </Tab>
          <Tab
            _hover={{
              borderTop: "3px solid #3182CE",
              transition: "background-color 0.4s ease-in-out",
            }}
            borderTop="2px solid #CBD5E0"
            width={150}
            _selected={{ borderTop: "3px solid #3182CE" }}
          >
            <Text pt={5} className={styles.fonte}>
              SHOP
            </Text>
          </Tab>
          <Tab
            _hover={{
              borderTop: "3px solid #3182CE",
              transition: "background-color 0.4s ease-in-out",
            }}
            borderTop="2px solid #CBD5E0"
            width={150}
            _selected={{ borderTop: "3px solid #3182CE" }}
          >
            <Text pt={5} className={styles.fonte}>
              COLEÇÕES
            </Text>
          </Tab>
          <Tab
            _hover={{
              borderTop: "3px solid #3182CE",
              transition: "background-color 0.4s ease-in-out",
            }}
            borderTop="2px solid #CBD5E0"
            width={150}
            _selected={{ borderTop: "3px solid #3182CE" }}
          >
            <Text pt={5} className={styles.fonte}>
              SOBRE
            </Text>
          </Tab>
          <Tab
            _hover={{
              borderTop: "3px solid #3182CE",
              transition: "background-color 0.4s ease-in-out",
            }}
            borderTop="2px solid #CBD5E0"
            width={150}
            _selected={{ borderTop: "3px solid #3182CE" }}
          >
            <Text pt={5} className={styles.fonte}>
              CONTATO
            </Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel
            p={0}
            animation={
              animatingOut ? "fadeOut 0.7s ease-out" : "fadeIn 0.7s ease-in-out"
            }
          >
            <HomeBody />
          </TabPanel>
          <TabPanel
            display="flex"
            justifyContent="center"
            animation={
              animatingOut ? "fadeOut 0.7s ease-out" : "fadeIn 0.7s ease-in-out"
            }
          >
            <ShopBody />
          </TabPanel>
          <TabPanel
            animation={
              animatingOut ? "fadeOut 0.7s ease-out" : "fadeIn 0.7s ease-in-out"
            }
          >
            <ColectionsBody />
          </TabPanel>
          <TabPanel
            display="flex"
            justifyContent="center"
            animation={
              animatingOut ? "fadeOut 0.7s ease-out" : "fadeIn 0.7s ease-in-out"
            }
          >
            <AboutBody />
          </TabPanel>
          <TabPanel
            display="flex"
            justifyContent="center"
            animation={
              animatingOut ? "fadeOut 0.7s ease-out" : "fadeIn 0.7s ease-in-out"
            }
          >
            <ContactBody />
          </TabPanel>
          <TabPanel
            display={tabIndex === 5 ? "block" : "none"}
            animation={
              animatingOut ? "fadeOut 0.7s ease-out" : "fadeIn 0.7s ease-in-out"
            }
          >
            <Cart />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default TabsHome;
