"use client";

import TitleWrapper from "@/components/shared/TitleWrapper/TitleWrapper";
import styles from "./Subscribe.module.scss";
import SeeMoreButton from "@/components/shared/SeeMoreButton/SeeMoreButton";
import Image from "next/image";
import LinkedinIcon from "@/assets/images/shared/linkedin.svg";
import Link from "next/link";
import { useState } from "react";

const Subscribe = () => {
  const [visibleCount, setVisibleCount] = useState<number>(4);
  console.log(visibleCount);

  return (
    <section className={`${styles.subscribe} container`}>
      <TitleWrapper
        style={{ fontSize: "1.9rem" }}
        title="By getting accepted you unlock access to our elite founder network."
        subtitle="Join Persist and gain access to our 400+ millionaire and billionaire startup network."
      />
      <div className={styles.mentors}>
        {Array(12)
          .fill(1)
          .slice(0, visibleCount)
          .map((_, index) => (
            <div key={"mentor__" + index} className={styles.card}>
              <div className={styles.mentor__img}>
                {/* <Image src={} alt="Worker" /> */}
              </div>
              <div className={styles.mentor__info}>
                <p className={styles.name}>Cillian Leonowicz</p>
                <p className={styles.position}>
                  Director in Technology Consulting & Blockchain Lead, EY
                </p>
                <Link href={""} className={styles.desc}>
                  Set up a Big 4&apos;s first global Blockchain Lab, managed
                  some of the earliest PoC &apos;s in Europe and first
                  &quot;production&quot; systems...
                </Link>
                <div className={styles.linkedin__icon}>
                  <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </div>
              </div>
            </div>
          ))}
      </div>
      <SeeMoreButton
        visibleCount={visibleCount}
        setVisibleCount={setVisibleCount}
        items={Array(12)}
        limit={4}
      />
    </section>
  );
};

export default Subscribe;
