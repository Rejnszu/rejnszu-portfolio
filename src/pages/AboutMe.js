import React from "react";
import AnimatedPages from "../components/UI/AnimatedPages";
import styles from "./AboutMe.module.css";
const AboutMe = () => {
  return (
    <AnimatedPages page="aboutme">
      <section className={styles["about-me"]}>
        <h1 className={styles["about-me__heading"]}>
          Witam wszystkich na mojej stronie!
        </h1>
        <div className={styles["about-me__"]}></div>
      </section>
    </AnimatedPages>
  );
};

export default AboutMe;
