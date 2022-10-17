import React, { useState } from "react";
import styles from "./ProjectItem.module.scss";
import { TfiWorld } from "react-icons/tfi";
import Button from "../../components/UI/Button";
import { AnimatePresence, motion } from "framer-motion";
import MoreInfoModal from "../../components/UI/MoreInfoModal";

const ProjectItem = (props) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const { alt, img, title, href } = { ...props };

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
          className={styles["project__link"]}
          href={href}
        >
          <TfiWorld />
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
