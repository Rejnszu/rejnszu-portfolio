import React from "react";
import styles from "./DescriptionItem.module.scss";
import { motion } from "framer-motion";
const DescriptionItem = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "200px" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: props.delay }}
      className={styles["description"]}
    >
      <p className={styles["description__title"]}>{props.title}</p>
      <div className={styles["description__collapse"]}>
        {props.children}Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially u
      </div>
    </motion.div>
  );
};

export default DescriptionItem;
