import styles from "./Challenges.module.scss";
import ChallengeCard from "./ChallengeCard/ChallengeCard";
import TitleWrapper from "@/components/shared/TitleWrapper/TitleWrapper";

const Challenges = () => {
  return (
    <section className={`${styles.challenges} container`}>
      <TitleWrapper
        title="Ongoing Startupathon Challenges"
        subtitle="Start your journey—tackle live challenges, earn equity, and lead the
        future."
      />
      <div className={styles.cards}>
        {Array(12)
          .fill(1)
          .map((_, index) => (
            <ChallengeCard key={`card__${index}`} />
          ))}
      </div>
    </section>
  );
};

export default Challenges;
