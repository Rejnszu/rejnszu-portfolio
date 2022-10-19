import React from "react";
import { motion } from "framer-motion";
import styles from "./SocialIcons.module.scss";
const SocialIcons = (props) => {
  const { delay, icon, href } = props;
  return (
    <motion.div
      whileInView={{
        opacity: [0, 1, 1, 1],
        y: ["-100px", "0px", "-50px", "0px"],
      }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        delay: delay,
        times: [0, 0.25, 0.5, 1],
        duration: 2,
      }}
      className={styles["social-icons"]}
    >
      <a target="_blank" rel="noreferrer" href={href}>
        {icon}
      </a>
    </motion.div>
  );
};

export default SocialIcons;
