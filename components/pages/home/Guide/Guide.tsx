import TitleWrapper from "@/components/shared/TitleWrapper/TitleWrapper";
import styles from "./Guide.module.scss";
import Timeline from "./Timeline/Timeline";

const Guide = () => {
  return (
    <section id="guide" className={`${styles.guide} container`}>
      <TitleWrapper
        title="Found an idea that matches your skills?"
        subtitle=" Here’s a simple guide on how the Startupathon process works once you
        find a project idea that suits your skills."
      />
      <Timeline />
    </section>
  );
};

export default Guide;
