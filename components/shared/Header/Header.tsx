"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import LogoImage from "@/assets/images/shared/logo.svg";
import BurgerIcon from "@/assets/images/shared/icons/burger.png";
import Link from "next/link";
import { navbarNavigation } from "@/constants/navigation.constant";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

const Header = () => {
  const [burger, setBurger] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(
    typeof window !== "undefined" ? window.innerWidth : undefined
  );

  const handleResize = () => {
    setWindowWidth(
      typeof window !== "undefined" ? window.innerWidth : undefined
    );
  };

  useEffect(() => {
    if (windowWidth && windowWidth > 993) {
      setBurger(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
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
        <div className={styles.burger}>
          <button
            className={styles.burger__button}
            onClick={() => setBurger(!burger)}
          >
            <Image src={BurgerIcon} alt="burger menu icon" />
          </button>
        </div>
      </header>
      <nav
        className={`${styles.burger__menu} ${
          burger && styles.active
        } container`}
      >
        {navbarNavigation.map((navigation, index) => (
          <Link key={`${navigation.value}__${index}`} href={navigation.path}>
            {navigation.name}
          </Link>
        ))}
        <Button name={"Apply For Fellowship"} />
      </nav>
    </>
  );
};

export default Header;
