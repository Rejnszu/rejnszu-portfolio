import React from "react";
import styles from "./ImageSection.module.scss";
import { motion } from "framer-motion";
import myPhoto from "../../assets/others/myphoto.png";
const ImageSection = () => {
  return (
    <div className={styles["informations__my-photo__wrapper"]}>
      <div className={styles["image-inner-wrapper"]}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          src={myPhoto}
          className={styles["informations__my-photo"]}
          alt="photo_of_me"
        />
        <motion.span
          initial={{ y: "200px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.7 }}
          className={styles["background-blur"]}
        />
        <motion.span
          initial={{ x: "-200px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className={styles.box}
        />
      </div>
    </div>
  );
};

export default ImageSection;
