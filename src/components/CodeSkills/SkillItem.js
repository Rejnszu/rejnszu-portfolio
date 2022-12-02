import React, { useContext } from "react";
import styles from "./SkillItem.module.scss";
import { motion } from "framer-motion";
import { GlobalVariablesContext } from "../../context/overall-context";

const SkillItem = (props) => {
  const { name, percent, index, icon, additionals } = props;
  const fillingWidth = `${percent}`;
  const isMobile = useContext(GlobalVariablesContext).isMobile;
  const delay = isMobile ? 0 : 1;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: delay }}
      className={styles["skills__item"]}
    >
      <div className={styles["skills__inner-wrapper"]}>
        <motion.p
          initial={{ y: "-30px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + 0.6,
            duration: 0.5,
            y: {
              duration: 0.5,
              ease: "linear",
            },
          }}
          className={styles["skills__name"]}
        >
          {name}
        </motion.p>
        <motion.p
          initial={{ y: "-30px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + 0.9,
            duration: 0.4,
            y: {
              duration: 0.5,
              ease: "linear",
            },
          }}
          className={styles["skills__icon"]}
        >
          {icon}
        </motion.p>
      </div>
      <div className={styles["skills__level"]}>
        <motion.div
          key={index}
          initial={{ width: 0 }}
          whileInView={{ width: fillingWidth }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.9, duration: 0.3, ease: "linear" }}
          className={styles["level__filling"]}
        >
          {percent}
        </motion.div>
      </div>
      {additionals && (
        <div className={styles["skills__additional-informations"]}>
          <span className={styles["additional-informations__center-icon"]}>
            {icon}
          </span>
          {additionals?.map((additional, i) => {
            return (
              <span
                key={i}
                className={`${styles["additional-informations__element"]} ${
                  styles["additional-informations__element--" + (i + 1)]
                }`}
              >
                {additional}
              </span>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

export default SkillItem;
