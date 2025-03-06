import { rewards } from "@/constants/options.constant";
import styles from "./Rewards.module.scss";
import RewardCard from "./RewardCard/RewardCard";

const Rewards = () => {
  return (
    <section className={`${styles.rewards} container`}>
      <h2 className={styles.title}>
        Startupathon Success Comes with Extraordinary Rewards
      </h2>
      <div className={styles.rewards__cards}>
        {rewards.slice(0, 5).map((reward, index) => (
          <RewardCard
            key={`${reward.value}__${index}`}
            title={reward.name}
            image={reward.icon}
          />
        ))}
      </div>
      <div className={styles.rewards__cards}>
        {rewards.slice(5).map((reward, index) => (
          <RewardCard
            key={`${reward.value}__${index}`}
            title={reward.name}
            image={reward.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Rewards;
