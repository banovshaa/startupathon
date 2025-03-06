import Image from "next/image";
import styles from "./Hero.module.scss";
import TeamBg from "@/assets/images/hero/team.png";
import { heroButtons } from "@/constants/options.constant";
import Button from "@/components/shared/Button/Button";

const Hero = () => {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.team__img}>
        <Image src={TeamBg} alt="Team bg" />
      </div>
      <h1>Startupathon</h1>
      <p className={styles.subtitle}>
        Your Chance to Build, Lead, and Succeed as a Founder
      </p>
      <div className={styles.video__wrapper}>
        <iframe
          src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.loom.com%2Fembed%2F996f59a2e5c34fd38b86544833c23dde&amp;display_name=Loom&amp;url=https%3A%2F%2Fwww.loom.com%2Fshare%2F996f59a2e5c34fd38b86544833c23dde&amp;image=https%3A%2F%2Fcdn.loom.com%2Fsessions%2Fthumbnails%2F996f59a2e5c34fd38b86544833c23dde-2bf900e52ff1c51c.gif&amp;type=text%2Fhtml&amp;schema=loom"
          width={940}
          height={705}
          title="Building Billion-Dollar Companies: Startup-A-Thon Insights"
        ></iframe>
      </div>
      <div className={styles.buttons}>
        {heroButtons.map((btn, index) => {
          const Icon = btn.icon;
          return (
            <Button
              name={btn.name}
              icon={Icon}
              key={`${btn.value}__${index}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
