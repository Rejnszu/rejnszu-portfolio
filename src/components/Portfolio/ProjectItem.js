import React, { useState } from "react";
import styles from "./ProjectItem.module.scss";
import { TfiWorld } from "react-icons/tfi";
import { BiCodeAlt } from "react-icons/bi";
import Button from "../../components/UI/Button";
import { AnimatePresence, motion } from "framer-motion";
import MoreInfoModal from "../../components/UI/MoreInfoModal";

const ProjectItem = (props) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const { alt, img, title, href, code } = { ...props };

  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={styles.project}
      >
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
        <img className={styles["project__image"]} src={img} alt={alt}></img>
        <p className={styles["project__title"]}>{title}</p>

        <Button onClick={() => setShowMoreInfo((prevState) => !prevState)}>
          {showMoreInfo ? "Mniej informacji" : "Więcej informacji"}
        </Button>
        <AnimatePresence>
          {showMoreInfo && <MoreInfoModal alt={alt} />}
        </AnimatePresence>
      </motion.div>
    </React.Fragment>
  );
};

export default ProjectItem;
