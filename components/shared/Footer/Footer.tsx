import Link from "next/link";
import styles from "./Footer.module.scss";
import LogoImage from "@/assets/images/shared/logo.svg";
import Image from "next/image";
import { footerNavigation, socialLinks } from "@/constants/navigation.constant";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.footer__inner}>
        <div className={styles.left}>
          <Link href={"/"} className={styles.logo}>
            <Image src={LogoImage} alt="Logo icon" />
          </Link>
          <p className={styles.desc}>
            We partner with entrepreneurs and businesses to help scale and grow
            their ideas. With a diverse team skilled in every sector there is no
            business we can not help get a leg up.
          </p>
          <div className={styles.socials}>
            {socialLinks.map((media, index) => {
              const Icon = media.icon;
              return (
                <Link
                  key={`${media.value}__${index}`}
                  href={media.path}
                  className={styles.social}
                >
                  {Icon && <Icon />}
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.right}>
          {footerNavigation.map((navigation, index) => (
            <div
              className={styles.nav__element}
              key={`${navigation.value}__${index}`}
            >
              <p className={styles.name}>{navigation.name}</p>\
              <nav>
                {navigation.children.map((child, index) => (
                  <Link key={`${child.value}__${index}`} href={child.path}>
                    <span>{child.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <p className={styles.copyright}>
        All rights reserved © 2025 persistventures.com
      </p>
    </footer>
  );
};

export default Footer;
