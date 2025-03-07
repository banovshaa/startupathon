import Banner from "@/components/shared/Banner/Banner";
import styles from "./SignUp.module.scss";
import Button from "@/components/shared/Button/Button";

const SignUp = () => {
  return (
    <section className={`${styles.sign__up} container`}>
      <div className={styles.inner}>
        <Banner
          subtitle={
            "Sign up to get notified first about new Startupathon projects and receive updates through our newsletter."
          }
        >
          <form className={styles.sign__up__form}>
            <input placeholder="enter your email ID" />
            <Button
              style={{ backgroundColor: "#7a56d6", backgroundImage: "unset" }}
              name="Subscribe"
            />
          </form>
        </Banner>
      </div>
    </section>
  );
};

export default SignUp;
