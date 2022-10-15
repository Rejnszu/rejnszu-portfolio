import React from "react";
import AnimatedPages from "../../components/UI/AnimatedPages";
import styles from "./AboutMe.module.scss";
const AboutMe = () => {
  return (
    <AnimatedPages page="aboutme">
      <section className={styles["about-me"]}>
        <h1 className="h1-heading">Witam wszystkich !</h1>
        <div className={styles["about-me__content"]}></div>
      </section>
    </AnimatedPages>
  );
};

export default AboutMe;
