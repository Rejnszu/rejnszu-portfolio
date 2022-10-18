import React from "react";
import styles from "./SkillItem.module.scss";
import { motion } from "framer-motion";

const SkillItem = (props) => {
  const { name, percent, index } = props;
  const fillingWidth = `${percent}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles["skills__list__item"]}
    >
      <motion.p
        initial={{ y: "-30px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.6,
          duration: 0.3,
          y: {
            duration: 0.5,
            ease: "linear",
          },
        }}
        className={styles["skills__list__item__name"]}
      >
        {name}
      </motion.p>
      <div className={styles["skills__list__item__level"]}>
        <motion.div
          key={index}
          initial={{ width: 0 }}
          whileInView={{ width: fillingWidth }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.3, ease: "linear" }}
          className={styles["level__filling"]}
        >
          {percent}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillItem;
