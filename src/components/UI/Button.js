import React from "react";
import styles from "./Button.module.scss";
const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${styles.button} ${props.styles}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
