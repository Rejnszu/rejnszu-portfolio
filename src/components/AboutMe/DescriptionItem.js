import React from "react";
import styles from "./DescriptionItem.module.scss";
import { motion } from "framer-motion";
const DescriptionItem = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "200px" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: props.delay }}
      className={styles["description"]}
    >
      <p className={styles["description__title"]}>{props.title}</p>
      <div className={styles["description__collapse"]}>{props.children}</div>
    </motion.div>
  );
};

export default DescriptionItem;
