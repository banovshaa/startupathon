import Image from "next/image";
import styles from "./Header.module.scss";
import LogoImage from "@/assets/images/shared/logo.svg";
import Link from "next/link";
import { navbarNavigation } from "@/constants/navigation.constant";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <Link href={"/"} className={styles.logo}>
        <Image src={LogoImage} alt="Logo icon" />
      </Link>
      <nav className={styles.navigation}>
        {navbarNavigation.map((navigation, index) => (
          <Link key={`${navigation.value}__${index}`} href={navigation.path}>
            <span>{navigation.name}</span>
          </Link>
        ))}
      </nav>
      <div className={styles.button__wrapper}>
        <Button name={"Apply For Fellowship"} />
      </div>
    </header>
  );
};

export default Header;
