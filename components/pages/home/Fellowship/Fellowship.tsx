import Button from "@/components/shared/Button/Button";
import styles from "./Fellowship.module.scss";
import Banner from "@/components/shared/Banner/Banner";

const Fellowship = () => {
  return (
    <section className={`${styles.fellowship} container`}>
      <Banner
        title={"Got an idea of your own?"}
        subtitle={
          "We are always on the lookout for visionaries with great startup ideas, ready to become successful founders. If that’s you, apply below for our Fellowship program."
        }
      >
        <Button name="Apply For Fellowship" />
      </Banner>
    </section>
  );
};

export default Fellowship;
