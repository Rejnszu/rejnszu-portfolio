import React from "react";
import styles from "./Button.module.scss";
const Button = (props) => {
  return (
    <button type="button" className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
