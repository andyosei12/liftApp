import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lift App</title>
        <meta name="description" content="Be inspired by orhers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Beginning of something awesome</p>
      </main>
    </div>
  );
};

export default Home;
