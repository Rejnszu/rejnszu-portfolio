import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Counter.module.scss";

const Counter = (props) => {
  const { delay, number, duration, title, estimated } = props;
  const [counter, setCounter] = useState(0);
  const [shouldCount, setShouldCount] = useState(false);
  useEffect(() => {
    if (!shouldCount) {
      setTimeout(() => setShouldCount(true), delay);
      return;
    }
    counter < props.number &&
      props.number < 300 &&
      setTimeout(() => setCounter(counter + 1), duration / number);
    counter < props.number &&
      props.number > 300 &&
      setTimeout(
        () => setCounter(counter + 10),
        props.duration / (props.number / 10)
      );
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: "-100px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: delay / 1000 - 0.1 }}
      className={styles["practical-skills__counter"]}
    >
      <p className={styles["counter__number"]}>
        {estimated && "+"} {counter}
      </p>
      <p className={styles["counter__title"]}>{title}</p>
    </motion.div>
  );
};

export default Counter;
