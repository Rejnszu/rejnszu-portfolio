import React from "react";
import Button from "../../../UI/Button";
import styles from "./ButtonsReference.module.scss";
const ButtonsReference = (props) => {
  const { isPolish, href, code } = props;
  return (
    <div className={styles["button-wrapper"]}>
      <a href={href} target="blank">
        <Button>
          {isPolish ? "Sprawdz wersje live" : "Check live version"}
        </Button>
      </a>
      <a href={code} target="blank">
        <Button>{isPolish ? "Sprawdz kod" : "Check the code"}</Button>{" "}
      </a>
    </div>
  );
};

export default ButtonsReference;
