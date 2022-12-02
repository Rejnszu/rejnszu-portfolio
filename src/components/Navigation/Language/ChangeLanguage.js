import React, { useContext } from "react";
import { GlobalVariablesContext } from "../../../context/overall-context";
import styles from "./ChangeLanguage.module.scss";
import { motion, AnimatePresence } from "framer-motion";
const ChangeLanguage = (props) => {
  const { isPolish, changeLanguageToPolish, changeLanguageToEnglish } =
    useContext(GlobalVariablesContext);

  return (
    <div
      onClick={() => {
        props.onClick();
        setTimeout(props.onClick, 1000);
      }}
      className={styles["language-wrapper"]}
    >
      <AnimatePresence mode="wait" initial={false}>
        {!isPolish ? (
          <motion.img
            key="polish"
            initial={{ x: "-50px", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "50px", opacity: 0 }}
            onClick={() => {
              setTimeout(changeLanguageToPolish, 100);
              document.documentElement.lang = "pl";
              sessionStorage.setItem("isPolish", true);
            }}
            src={require("../../../assets/language/polish.png")}
            alt="https://www.flaticon.com/free-icons/poland"
          />
        ) : (
          <motion.img
            key="english"
            initial={{ x: "-50px", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "50px", opacity: 0 }}
            onClick={() => {
              setTimeout(changeLanguageToEnglish, 100);
              document.documentElement.lang = "en";
              sessionStorage.setItem("isPolish", false);
            }}
            src={require("../../../assets/language/english.png")}
            alt="https://www.flaticon.com/free-icons/uk-flag"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChangeLanguage;
