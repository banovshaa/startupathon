import { ReactNode } from "react";
import styles from "./Banner.module.scss";

const Banner = ({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) => {
  return (
    <div className={styles.banner}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
