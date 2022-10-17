import React from "react";
import styles from "./MoreInfoModal.module.scss";
import { motion } from "framer-motion";
const MoreInfoModal = (props) => {
  return (
    <React.Fragment>
      <motion.div
        key={props.alt}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className={styles.modal}
      >
        {props.children}Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
      </motion.div>
    </React.Fragment>
  );
};

export default MoreInfoModal;
