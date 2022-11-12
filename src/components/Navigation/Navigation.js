import React, { useContext } from "react";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GlobalVariablesContext } from "../../context/GlobalVariables";
import { ENGLISH_VERSION, POLISH_VERSION } from "./NavigationLanguages";

const Navigation = (props) => {
  const { isPolish, hideNextPageButtonHandler } = useContext(
    GlobalVariablesContext
  );
  const content = isPolish ? POLISH_VERSION : ENGLISH_VERSION;
  return (
    <motion.div
      key="navigation"
      layout
      initial={{ zIndex: 200, position: "fixed", opacity: 0 }}
      animate={{ zIndex: 200, position: "fixed", opacity: 1 }}
      exit={{ zIndex: 200, position: "fixed", opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div onClick={props.onClick} className={styles.backdrop}></div>
      <nav
        className={styles.navigation}
        onClick={() => {
          props.onClick();
          hideNextPageButtonHandler();
        }}
      >
        <ul className={styles.navigation__list}>
          <Link to={"/omnie"}>
            <li style={{ "--i": 5 }}>{content.aboutMe}</li>
          </Link>
          <Link to={"/umiejetnoscikodowania"}>
            <li style={{ "--i": 4 }}>{content.codingSkills}</li>
          </Link>

          <Link to={"/umiejetnoscipraktyczne"}>
            <li style={{ "--i": 3 }}>{content.practicalSkills}</li>
          </Link>

          <Link to={"/portfolio"}>
            <li style={{ "--i": 2 }}>{content.portfolio}</li>
          </Link>

          <Link to={"/kontakt"}>
            <li style={{ "--i": 1 }}>{content.contact}</li>
          </Link>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navigation;
