import { Dispatch, SetStateAction } from "react";
import styles from "./SeeMoreButton.module.scss";
type SeeMoreButtonProps = {
  visibleCount: number;
  items: string[];
  limit?: number;
  setVisibleCount: Dispatch<SetStateAction<number>>;
};

const SeeMoreButton = ({
  items,
  visibleCount,
  setVisibleCount,
  limit = 5,
}: SeeMoreButtonProps) => {
  const handleClick = () => {
    setVisibleCount((prev) =>
      visibleCount === items.length
        ? limit
        : Math.min(prev + limit, items.length)
    );
  };

  return (
    <div className={styles.see__more}>
      <button onClick={handleClick}>
        See {visibleCount === items.length ? "less" : "more"}
      </button>
    </div>
  );
};

export default SeeMoreButton;
