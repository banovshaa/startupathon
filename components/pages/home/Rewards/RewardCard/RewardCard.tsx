import Image, { StaticImageData } from "next/image";
import styles from "./RewardCard.module.scss";
type RewardType = {
  title: string;
  image: StaticImageData;
};
const RewardCard = ({ title, image }: RewardType) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt="Reward image" className={styles.card__img} />
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default RewardCard;
