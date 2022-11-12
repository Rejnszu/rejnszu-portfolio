import React, { useContext } from "react";
import styles from "./MoreInfoModal.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import ReactDom from "react-dom";
import { motion } from "framer-motion";
import { GlobalVariablesContext } from "../../context/GlobalVariables";
const MoreInfoModal = (props) => {
  const closeModal = (e) => {
    e.target.getAttribute("data-close") === "true" && props.onClick();
  };
  const { isPolish } = useContext(GlobalVariablesContext);

  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <motion.div
          data-close={true}
          onClick={closeModal}
          key={props.alt}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0, transition: { delay: 0.2 } }}
          className={styles.modal}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0.2 } }}
            exit={{ scale: 0, opacity: 0 }}
            key={props.alt + "key"}
            data-close={false}
            className={styles["modal__content"]}
          >
            <span onClick={props.onClick} className={styles["close-modal"]}>
              <AiOutlineClose />
            </span>
            <p className={styles["modal__content__group-title"]}>
              {isPolish ? "Wykorzystane technologie:" : "Used technologies"}
            </p>
            <ul className={styles["modal__content__technologies"]}>
              {props.technologies.map((technologie) => (
                <li key={technologie}>
                  <TiTickOutline />
                  {technologie}
                </li>
              ))}
            </ul>
            <p className={styles["modal__content__group-title"]}>
              {isPolish ? "Krótki opis" : "Short Description"}
            </p>
            <p className={styles["modal__content__description"]}>
              {props.description}
            </p>
          </motion.div>
        </motion.div>,
        document.getElementById("more-info__modal")
      )}
    </React.Fragment>
  );
};

export default MoreInfoModal;
