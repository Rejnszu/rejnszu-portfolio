import React, { useRef } from "react";
import styles from "./Informations.module.scss";
import TechnologieItem from "./TechnologieItem";
import useShuffle from "../../../../hooks/useShuffle";

const Informations = (props) => {
  const { isPolish, technologies, description, description_EN } = props;
  const listRef = useRef(null);
  const shuffle = useShuffle(listRef);

  return (
    <div className={styles["project__informations"]}>
      <div className={styles["project__description"]}>
        <p className={styles["informations__title"]}>
          {isPolish ? "Krótki opis" : "Short Description"}
        </p>
        <p className={styles["description__content"]}>
          {isPolish ? description : description_EN}
        </p>
      </div>
      <div className={styles["project__technologies"]}>
        <p className={styles["informations__title"]}>
          {isPolish ? "Wykorzystane technologie:" : "Used technologies"}
        </p>
        <ul ref={listRef} className={styles["technologies__list"]}>
          {technologies.map((technologie) => (
            <TechnologieItem key={technologie} technologie={technologie} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Informations;
