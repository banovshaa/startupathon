import Image from "next/image";
import styles from "./ChallengeCard.module.scss";
import Button from "@/components/shared/Button/Button";
import BurningImg from "@/assets/images/shared/icons/burning.png";
import DemoImg from "@/assets/images/rewards/demo.png";

const ChallengeCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__icon}>
        <Image src={DemoImg} alt={"Card icon"} />
      </div>
      <div className={styles.card__inner}>
        <p className={styles.title}>VibeCoder</p>
        <p className={styles.subtitle}>Initial Funding Offered : $10,500</p>
        <p className={styles.description}>
          An innovative &quot;Vibe coding&quot; tool with features like drawing
          tools, Spotify integration, UI component library, smart code
          explanations, and built-in design assets.
        </p>
      </div>
      <div className={styles.deadline__text}>
        <Image
          src={BurningImg}
          alt="Burning icon"
          className={styles.burning__img}
        />
        <p>Deadline approaching! Apply by March 14, 2025!</p>
      </div>
      <Button style={{ width: "100%" }} name="View Challenge Details" />
    </div>
  );
};

export default ChallengeCard;
