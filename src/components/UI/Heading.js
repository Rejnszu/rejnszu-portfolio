import React from "react";
import styles from "./Heading.module.scss";
import { motion } from "framer-motion";
const Heading = (props) => {
  return (
    <motion.div
      key={props.name}
      animate={{ scale: [0, 1, 0.7, 1] }}
      transition={{
        ease: "easeInOut",
        delay: 0.5,
        times: [0, 0.2, 0.5, 1],
        duration: 1,
      }}
      className={styles["heading-center"]}
    >
      <h1 className={styles.heading}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.text}
      </h1>
    </motion.div>
  );
};

export default Heading;
