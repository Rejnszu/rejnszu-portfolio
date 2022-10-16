import React from "react";
import styles from "./Heading.module.scss";
import { motion } from "framer-motion";
const Heading = (props) => {
  return (
    <motion.div
      key={props.name}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{
        ease: "easeInOut",
        delay: 0.5,
        times: [0, 0.5, 1],
        duration: 1,
      }}
      className={styles["heading-center"]}
    >
      <h1 className={styles.heading}>
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "30px" }}
          transition={{ duration: 0.5, delay: 1 }}
        ></motion.span>
        <motion.span
          initial={{ height: 0 }}
          animate={{ height: "30px" }}
          transition={{ duration: 0.5, delay: 1 }}
        ></motion.span>
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "30px" }}
          transition={{ duration: 0.5, delay: 1.5 }}
        ></motion.span>
        <motion.span
          initial={{ height: 0 }}
          animate={{ height: "30px" }}
          transition={{ duration: 0.5, delay: 1.5 }}
        ></motion.span>
        {props.text}
      </h1>
    </motion.div>
  );
};

export default Heading;
