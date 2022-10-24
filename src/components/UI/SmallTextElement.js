import React from "react";
import styles from "./SmallTextElement.module.scss";
import { motion } from "framer-motion";
const SmallTextElement = (props) => {
  return (
    <div
      style={{ justifyContent: `${props.flexPosition}` }}
      className={styles.wrapper}
    >
      <motion.p
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: props.delay, duration: 0.5, ease: "linear" }}
        className={styles.text}
      >
        {props.children}
        <motion.span
          layout
          initial={{ opacity: 0, right: "-100px" }}
          whileInView={{ opacity: 1, right: 0 }}
          viewport={{ once: true }}
          transition={{ delay: props.delay + 0.5, duration: 0.5 }}
        />
      </motion.p>
    </div>
  );
};

export default SmallTextElement;
