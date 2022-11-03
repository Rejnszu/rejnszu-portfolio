import React from "react";
import styles from "./CustomLink.module.scss";
import { FaHandPointer } from "react-icons/fa";
import { motion } from "framer-motion";
const CustomLink = (props) => {
  return (
    <a
      className={styles["custom-link"]}
      target="_blank"
      rel="noreferrer"
      href={props.href}
    >
      {props.children}
      <motion.span
        initial={{ opacity: 0, x: "100px", y: "100px" }}
        whileInView={{ opacity: 1, x: "10px", y: "30px" }}
        transition={{ delay: props.delay }}
        className={styles["custom-link__cursor"]}
      >
        <FaHandPointer />
      </motion.span>
    </a>
  );
};

export default CustomLink;
