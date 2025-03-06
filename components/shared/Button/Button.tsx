import { ButtonHTMLAttributes, CSSProperties } from "react";
import styles from "./Button.module.scss";
import Image, { StaticImageData } from "next/image";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  icon?: StaticImageData;
  style?: CSSProperties;
}

const Button = ({ name, icon, style, ...props }: Button) => {
  const Icon = icon;

  return (
    <button style={style} className={styles.button} {...props}>
      <span>{name}</span>
      {Icon && <Image src={Icon} alt="Icon" className={styles.icon} />}
    </button>
  );
};

export default Button;
