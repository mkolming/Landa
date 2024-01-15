import * as React from "react";
import HeaderHome from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import styles from "@/styles/home.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import TabsHome from "@/components/Tabs/tabs";

function Home() {
  return (
    <>
      <div className={styles.background}>
        <ChakraProvider>
          <HeaderHome />
          <TabsHome />
          <Footer />
        </ChakraProvider>
      </div>
    </>
  );
}

export default Home;
