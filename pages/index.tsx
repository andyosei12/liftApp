import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [isSignin, setIsSignin] = useState(false);

  const toggleSigninHandler = () => {
    setIsSignin(!isSignin);
  };

  return (
    <div className={styles.register}>
      <Head>
        <title>LiftApp | {isSignin ? "Log in" : "Register"}</title>
      </Head>
      <section className={styles["register-container"]}>
        <h1 className="mb-large logo">LiftApp</h1>
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
      <p>About section</p>
    </div>
  );
};

export default Home;
