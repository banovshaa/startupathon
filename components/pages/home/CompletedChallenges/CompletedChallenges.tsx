import styles from "./CompletedChallenges.module.scss";
import CardIcon from "@/assets/images/completedChallenges/demoIcon.png";
import WorkerImg from "@/assets/images/completedChallenges/demoWorker.jpg";
import LinkedinIcon from "@/assets/images/shared/linkedin.svg";
import Button from "@/components/shared/Button/Button";
import Image from "next/image";

const CompletedChallenges = () => {
  return (
    <section className={`${styles.completed__challenges} container`}>
      <h2 className={styles.title}>Completed Startupathon Challenges</h2>
      <p className={styles.subtitle}>
        People like you have cracked Startupathon challenges and are now leading
        thriving startups.
      </p>
      <div className={styles.cards}>
        {Array(12)
          .fill(1)
          .map((_, index) => (
            <div key={"card" + index} className={styles.card}>
              <div className={styles.card__header}>
                <p>Neighborgood</p>
                <div className={styles.icon}>
                  <Image src={CardIcon} alt="Card icon" />
                </div>
              </div>
              <div className={styles.card__inner}>
                <div className={styles.worker__img}>
                  <Image src={WorkerImg} alt="Worker Image" />
                </div>
                <div className={styles.worker__data}>
                  <p className={styles.name}>Purnendu Thamb</p>
                  <p className={styles.position}>
                    Lead Developer, Neighborgood.
                  </p>
                  <div className={styles.linkedin__icon}>
                    <Image src={LinkedinIcon} alt="Linkedin Icon" />
                  </div>
                  <p className={styles.desc}>
                    NeighborGood aims to create the simplest platform for
                    neighborhoods to connect, using an AI agent that acts as a
                    social extrovert to find activities for people to enjoy
                    together.
                  </p>
                </div>
              </div>
              <div className={styles.card__bottom}>
                <p>
                  Initial Funding Offered : <span>$61,500</span>
                </p>
                <Button name="View More Details" style={{ width: "100%" }} />
              </div>
            </div>
          ))}
      </div>
      <div className={styles.see__more}>
        <button>See more</button>
      </div>
    </section>
  );
};

export default CompletedChallenges;
