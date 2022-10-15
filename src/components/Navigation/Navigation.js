import React from "react";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = (props) => {
  return (
    <motion.nav
    // key="navigation"
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    // transition={{ duration: 0.2 }}
    >
      <div className={styles.backdrop} onClick={props.onClick}></div>
      <div className={styles.navigation} onClick={props.onClick}>
        <ul className={styles.navigation__list}>
          <Link to={"/omnie"}>
            <li className={styles["index-5"]}>O mnie</li>
          </Link>
          <Link to={"/umiejetnoscikodowania"}>
            <li className={styles["index-4"]}>Umiejętności kodowania</li>
          </Link>

          <Link to={"/umiejetnoscipraktyczne"}>
            <li className={styles["index-3"]}>Umiejętności praktyczne</li>
          </Link>

          <Link to={"/portfolio"}>
            <li className={styles["index-2"]}>Portfolio</li>
          </Link>

          <Link to={"/kontakt"}>
            <li className={styles["index-1"]}>Kontakt</li>
          </Link>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;
