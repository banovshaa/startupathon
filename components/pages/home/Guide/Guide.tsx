import styles from "./Guide.module.scss";

const Guide = () => {
  return (
    <section className={`${styles.guide} container`}>
      <h2 className={styles.title}>Found an idea that matches your skills? </h2>
      <p className={styles.subtitle}>
        Here’s a simple guide on how the Startupathon process works once you
        find a project idea that suits your skills.
      </p>
    </section>
  );
};

export default Guide;
