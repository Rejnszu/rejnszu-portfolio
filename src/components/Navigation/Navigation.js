import React, { useContext } from "react";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GlobalVariablesContext } from "../../context/GlobalVariables";

const Navigation = (props) => {
  const globalVariablesCtx = useContext(GlobalVariablesContext);
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
          globalVariablesCtx.hideNextPageButtonHandler();
        }}
      >
        <ul className={styles.navigation__list}>
          <Link to={"/omnie"}>
            <li style={{ "--i": 5 }}>O mnie</li>
          </Link>
          <Link to={"/umiejetnoscikodowania"}>
            <li style={{ "--i": 4 }}>Umiejętności kodowania</li>
          </Link>

          <Link to={"/umiejetnoscipraktyczne"}>
            <li style={{ "--i": 3 }}>Umiejętności praktyczne</li>
          </Link>

          <Link to={"/portfolio"}>
            <li style={{ "--i": 2 }}>Portfolio</li>
          </Link>

          <Link to={"/kontakt"}>
            <li style={{ "--i": 1 }}>Kontakt</li>
          </Link>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navigation;
