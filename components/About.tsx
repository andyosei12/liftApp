import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <section className={styles["about-section"]}>
      <h1 className={styles["about-section__title"]}>
        Welcome to our community
      </h1>
      <article className={styles["about-section__text"]}>
        <p>
          Draw inspirations from the stories and testimonies of others and get
          guidance from people you share similar background with.
        </p>
        <p>Come join us and let&apos;s lift up each other</p>
      </article>
    </section>
  );
};

export default About;
