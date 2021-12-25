import type { NextPage } from "next";
import Head from "next/head";
import { Alchemy } from "../components/Alchemy";
import FilterProvider from "../providers/FilterProvider";
import IngredientsProvider from "../providers/IngredientsProvider";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alchemy</title>
        <meta name="description" content="Helper for alchemy in Skyrim" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FilterProvider>
        <IngredientsProvider>
          <Alchemy />
        </IngredientsProvider>
      </FilterProvider>
    </div>
  );
};

export default Home;
