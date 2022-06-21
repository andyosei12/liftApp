import type { NextPage } from "next";
import Head from "next/head";
import Signup from "../components/Signup";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.register}>
      <Head>
        <title>LiftApp | Register</title>
      </Head>
      <section className={styles["register-container"]}>
        <h1 className="mb-large logo">LiftApp</h1>
        <Signup />
        <h2>
          Already have an account?
          <span> Log in</span>
        </h2>
      </section>
      <p>About section</p>
    </div>
  );
};

export default Home;
