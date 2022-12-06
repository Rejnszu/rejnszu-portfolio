import React, { useContext } from "react";
import { motion } from "framer-motion";
import styles from "./ProjectItem.module.scss";
import { TfiWorld } from "react-icons/tfi";
import { BiCodeAlt } from "react-icons/bi";
import Button from "../../components/UI/Button";

import { GlobalVariablesContext } from "../../context/overall-context";
import { Link } from "react-router-dom";

const ProjectItem = (props) => {
  const {
    img,
    title,
    href,
    code,
    technologies,
    description,
    description_EN,
    inProgress,
    route,
  } = props;
  const { isPolish } = useContext(GlobalVariablesContext);

  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`${styles.project} ${
          inProgress ? styles["in-progress"] : ""
        }`}
      >
        {inProgress && (
          <div className={styles.cone}>
            <img
              src={require("../../assets/others/cone.png")}
              alt="https://www.flaticon.com/free-icons/cone"
            />
          </div>
        )}
        <a
          target="_blank"
          rel="noreferrer"
          className={`${styles["project__reference"]} ${styles["project__reference--link"]}`}
          href={href}
        >
          <TfiWorld />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className={`${styles["project__reference"]} ${styles["project__reference--code"]}`}
          href={code}
        >
          <BiCodeAlt />
        </a>
        <img
          loading="lazy"
          className={styles["project__image"]}
          src={img[0]}
          alt={title}
        ></img>
        <p className={styles["project__title"]}>{title}</p>
        <Link className={styles["project__link"]} to={route}>
          <Button>
            {isPolish ? "Więcej informacji" : "More informations"}
          </Button>
        </Link>
      </motion.div>
    </React.Fragment>
  );
};

export default ProjectItem;
