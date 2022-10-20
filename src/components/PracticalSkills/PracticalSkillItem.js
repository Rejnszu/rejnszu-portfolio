import React from "react";
import styles from "./PracticalSkillItem.module.scss";
import { motion } from "framer-motion";
const PracticalSkillItem = (props) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: "50%" }}
      whileInView={{ opacity: 1, x: "0" }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 4 + props.delay }}
      className={styles["practical-skills"]}
    >
      {props.children}
    </motion.li>
  );
};

export default PracticalSkillItem;
