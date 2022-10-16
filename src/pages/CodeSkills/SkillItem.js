import React, { useRef } from "react";
import styles from "./SkillItem.module.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";

const SkillItem = (props) => {
  const { name, percent, index } = props;
  const fillingWidth = `${percent}`;
  const itemRef = useRef(null);
  const nameRef = useRef(null);
  const fillingRef = useRef(null);

  // useEffect(() => {
  //   itemRef.current.addEventListener("mouseenter", function () {
  //     if (this.classList.contains(styles.animate)) {
  //       return;
  //     } else {
  //       itemRef.current.classList.add(styles.animate);
  //       nameRef.current.classList.add(styles.animate);
  //       fillingRef.current.classList.add(styles.animate);
  //     }
  //     setTimeout(() => this.classList.remove(styles.animate), 2000);
  //   });
  // }, []);

  return (
    <div ref={itemRef} className={styles["skills__list__item"]}>
      <motion.p
        ref={nameRef}
        initial={{ y: "-30px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
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
          ref={fillingRef}
          key={index}
          initial={{ width: 0 }}
          animate={{ width: fillingWidth }}
          transition={{ delay: 0.9, duration: 0.3, ease: "linear" }}
          className={styles["level__filling"]}
        >
          {percent}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillItem;
