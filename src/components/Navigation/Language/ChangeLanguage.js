import React, { useContext } from "react";
import { GlobalVariablesContext } from "../../../context/GlobalVariables";
import styles from "./ChangeLanguage.module.scss";
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
      {!isPolish ? (
        <img
          onClick={() => {
            setTimeout(changeLanguageToPolish, 200);
            sessionStorage.setItem("isPolish", true);
          }}
          src={require("../../../assets/language/polish.png")}
          alt="https://www.flaticon.com/free-icons/poland"
        />
      ) : (
        <img
          onClick={() => {
            setTimeout(changeLanguageToEnglish, 200);
            sessionStorage.setItem("isPolish", false);
          }}
          src={require("../../../assets/language/english.png")}
          alt="https://www.flaticon.com/free-icons/uk-flag"
        />
      )}
    </div>
  );
};

export default ChangeLanguage;
