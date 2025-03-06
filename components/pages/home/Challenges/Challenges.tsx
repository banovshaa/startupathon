import styles from "./Challenges.module.scss";
import ChallengeCard from "./ChallengeCard/ChallengeCard";

const Challenges = () => {
  return (
    <section className={`${styles.challenges} container`}>
      <h2 className={styles.title}>Ongoing Startupathon Challenges</h2>
      <p className={styles.subtitle}>
        Start your journey—tackle live challenges, earn equity, and lead the
        future.
      </p>
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
