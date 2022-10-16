import React from "react";
import AnimatedPages from "../../components/UI/AnimatedPages";
import Heading from "../../components/UI/Heading";
import SmallTextElement from "../../components/UI/SmallTextElement";
import styles from "./Portfolio.module.scss";
const Portfolio = () => {
  return (
    <AnimatedPages page="portfolio">
      <section className={`${styles["portfolio"]} section-padding`}>
        <Heading text="Portfolio" />
        <SmallTextElement flexPosition="center">
          Poniżej przedstawiam pare moich ukończonych projektów.
        </SmallTextElement>
      </section>
    </AnimatedPages>
  );
};

export default Portfolio;
