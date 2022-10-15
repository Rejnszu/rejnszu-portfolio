import React from "react";
import styles from "./Burger.module.scss";
const Burger = (props) => {
  return (
    <div onClick={props.onClick} className={styles.burger}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
