import Button from "@/components/shared/Button/Button";
import styles from "./Fellowship.module.scss";

const Fellowship = () => {
  return (
    <section className={`${styles.fellowship} container`}>
      <div className={styles.fellowship__inner}>
        <h2 className={styles.title}>Got an idea of your own?</h2>
        <p className={styles.subtitle}>
          We are always on the lookout for visionaries with great startup ideas,
          ready to become successful founders. If that’s you, apply below for
          our Fellowship program.
        </p>
        <Button name="Apply For Fellowship" />
      </div>
    </section>
  );
};

export default Fellowship;
