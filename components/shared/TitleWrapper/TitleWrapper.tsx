"use client";

import { CSSProperties, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./TitleWrapper.module.scss";

const titleVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const TitleWrapper = ({
  title,
  subtitle,
  style,
}: {
  title: string;
  subtitle?: string;
  style?: CSSProperties;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={titleVariants} // Apply the variants here
    >
      <h2 style={{ fontSize: style?.fontSize }} className={styles.title}>
        {title}
      </h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </motion.div>
  ) : null;
};

export default TitleWrapper;
