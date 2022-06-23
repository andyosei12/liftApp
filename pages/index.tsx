import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import About from "../components/About";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [isSignin, setIsSignin] = useState(false);

  const toggleSigninHandler = () => {
    setIsSignin(!isSignin);
  };

  return (
    <main className={styles.home}>
      <Head>
        <title>LiftApp | {isSignin ? "Log in" : "Register"}</title>
      </Head>
      <section className={styles["register-container"]}>
        <h1 className="mb-large logo">LiftApp</h1>
        <p className={styles["register-container--text"]}>
          Draw inspirations from the stories and testimonies of others.
        </p>
        {isSignin ? <Signin /> : <Signup />}
        {isSignin ? (
          <h2>
            Don&apos;t have an account?
            <span onClick={toggleSigninHandler}> Sign up</span>
          </h2>
        ) : (
          <h2>
            Already have an account?
            <span onClick={toggleSigninHandler}> Log in</span>
          </h2>
        )}
      </section>
      <About />
    </main>
  );
};

export default Home;
