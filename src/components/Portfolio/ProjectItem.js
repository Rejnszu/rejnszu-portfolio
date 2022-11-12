import React, { useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./ProjectItem.module.scss";
import { TfiWorld } from "react-icons/tfi";
import { BiCodeAlt } from "react-icons/bi";
import Button from "../../components/UI/Button";
import MoreInfoModal from "../../components/UI/MoreInfoModal";
import { GlobalVariablesContext } from "../../context/GlobalVariables";

const ProjectItem = (props) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const { alt, img, title, href, code, technologies, description, inProgress } =
    props;
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
          src={img}
          alt={alt}
        ></img>
        <p className={styles["project__title"]}>{title}</p>
        <Button onClick={() => setShowMoreInfo((prevState) => !prevState)}>
          {isPolish
            ? showMoreInfo
              ? "Mniej informacji"
              : "Więcej informacji"
            : showMoreInfo
            ? "Less informations"
            : "More informations"}
        </Button>
        <AnimatePresence>
          {showMoreInfo && (
            <MoreInfoModal
              onClick={() => setShowMoreInfo((prevState) => !prevState)}
              technologies={technologies}
              description={description}
              alt={alt}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </React.Fragment>
  );
};

export default ProjectItem;
