import React from "react";
import AnimatedPages from "../../components/UI/AnimatedPages";
import Heading from "../../components/UI/Heading";
import styles from "./AboutMe.module.scss";
const AboutMe = () => {
  return (
    <AnimatedPages page="aboutme">
      <section className={`${styles["about-me"]} section-padding`}>
        <Heading text="Witam wszystkich!" />
        <div className={styles["about-me__content"]}></div>
      </section>
    </AnimatedPages>
  );
};

export default AboutMe;
