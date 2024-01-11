import * as React from "react";
import HeaderHome from "@/components/Header/header";
import styles from "@/styles/home.module.css";

function Home() {
  return (
    <>
      <div className={styles.background}>
        <HeaderHome />
        <div>body</div>
        <div>footer</div>
      </div>
    </>
  );
}

export default Home;
