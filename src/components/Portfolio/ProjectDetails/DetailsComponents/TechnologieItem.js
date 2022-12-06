import React from "react";
import { TiTickOutline } from "react-icons/ti";
import styles from "./TechnologieItem.module.scss";

const TechnologieItem = (props) => {
  return (
    <li className={styles["technologie-item"]}>
      <TiTickOutline />
      {props.technologie}
    </li>
  );
};

export default TechnologieItem;
