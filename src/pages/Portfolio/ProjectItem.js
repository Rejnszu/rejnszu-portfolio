import React from "react";
import styles from "./ProjectItem.module.scss";
import img from "../../assets/musify-min.png";
import Button from "../../components/UI/Button";
import { motion } from "framer-motion";
const ProjectItem = (props) => {
  const { alt, src, title } = { ...props };
  return (
    <motion.div
      initial={{ opacity: 0, x: "200px" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className={styles.project}
    >
      <p className={styles["project__title"]}>{title}Przykladowy tytuł</p>
      <img className={styles["project__image"]} src={img} alt={alt}></img>
      <Button>Więcej Informacji</Button>
    </motion.div>
  );
};

export default ProjectItem;
