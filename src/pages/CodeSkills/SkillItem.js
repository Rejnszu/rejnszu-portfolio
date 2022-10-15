import React from "react";
import styles from "./SkillItem.module.scss";
import { motion } from "framer-motion";
const SkillItem = (props) => {
  const { name, percent, index } = props;
  const fillingWidth = `${percent}`;
  console.log(fillingWidth);
  return (
    <div className={styles["skills__list__item"]}>
      <motion.p
        initial={{ y: "-30px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className={styles["skills__list__item__name"]}
      >
        {name}
      </motion.p>
      <div className={styles["skills__list__item__level"]}>
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: fillingWidth }}
          transition={{ delay: 0.9, duration: 0.3 }}
          className={styles["level__filling"]}
        >
          {percent}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillItem;
