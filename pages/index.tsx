import type { NextPage } from "next";
import Head from "next/head";
import { Alchemy } from "../components/Alchemy";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alchemy</title>
        <meta name="description" content="Helper for alchemy in Skyrim" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Alchemy />
    </div>
  );
};

export default Home;
