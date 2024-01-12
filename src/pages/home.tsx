import * as React from "react";
import HeaderHome from "@/components/Header/header";
import HomeBody from "@/components/HomeBody/homebody";
import styles from "@/styles/home.module.css";

function Home() {
  return (
    <>
      <div className={styles.background}>
        <HeaderHome />
        <HomeBody />
        <div>footer</div>
      </div>
    </>
  );
}

export default Home;
