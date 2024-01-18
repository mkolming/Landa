import * as React from "react";
import HeaderHome from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import styles from "@/styles/home.module.css";
import { ChakraProvider, Container } from "@chakra-ui/react";
import TabsHome from "@/components/Tabs/tabs";
import DrawerModel from "@/components/Drawer/drawer";
import { useState } from "react";

function Home() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <ChakraProvider>
      <div className={styles.background}>
        <Container maxWidth="1920px" centerContent>
          <DrawerModel setTabIndex={setTabIndex} />
          <HeaderHome />
          <TabsHome tabIndex={tabIndex} setTabIndex={setTabIndex} />
          <Footer />
        </Container>
      </div>
    </ChakraProvider>
  );
}

export default Home;
