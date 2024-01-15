import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Global, css } from "@emotion/react";
import ContactBody from "../Bodys/contactBody";
import ColectionsBody from "../Bodys/colectionsBody";
import ShopBody from "../Bodys/shopBody";
import AboutBody from "../Bodys/aboutBody";
import HomeBody from "../Bodys/homebody";
import styles from "@/styles/home.module.css";

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

export default function TabsHome() {
  const [tabIndex, setTabIndex] = useState(0);
  const [animatingOut, setAnimatingOut] = useState(false);

  const handleTabsChange = (index: React.SetStateAction<number>) => {
    setAnimatingOut(true);
    setTimeout(() => {
      setTabIndex(index);
      setAnimatingOut(false);
    }, 700);
  };

  const fonte: string = "a";
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
            animation={
              animatingOut ? "fadeOut 0.7s ease-out" : "fadeIn 0.7s ease-in-out"
            }
          >
            <AboutBody />
          </TabPanel>
          <TabPanel
            animation={
              animatingOut ? "fadeOut 0.7s ease-out" : "fadeIn 0.7s ease-in-out"
            }
          >
            <ContactBody />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
