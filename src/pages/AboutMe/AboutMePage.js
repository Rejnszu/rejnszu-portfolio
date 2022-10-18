import React from "react";
import AnimatedPages from "../../components/UI/AnimatedPages";
import Heading from "../../components/UI/Heading";
import styles from "./AboutMe.module.scss";
import myImage from "../../assets/hobbiton-min.jpg";
import DescriptionItem from "../../components/AboutMe/DescriptionItem";

import SmallTextElement from "../../components/UI/SmallTextElement";

import CustomLink from "../../components/UI/CustomLink";
const AboutMe = () => {
  return (
    <AnimatedPages page="aboutme">
      <section className={`${styles["about-me"]} section-padding`}>
        <Heading text="Łukasz Rejnsz, Twój nowy Front-End Developer" />
        <div className={styles["about-me__informations"]}>
          <div className={styles["informations__my-photo__wrapper"]}>
            <img
              src={myImage}
              className={styles["informations__my-photo"]}
              alt="photo_of_me"
            />
          </div>
          <div className={styles["informations__description"]}>
            <DescriptionItem title="Wprowadzenie" delay={0.5} />
            <DescriptionItem title="Trochę faktów o mnie" delay={0.8} />
            <DescriptionItem title="Moja kariera" delay={1.1} />
            <DescriptionItem title="Moje cele" delay={1.4} />
          </div>
        </div>
        <SmallTextElement flexPosition="center">
          Wciąż za mało informacji? Sprawdź się moim{" "}
          <CustomLink href="https://rejnszu.pl/quiz/">quizie</CustomLink>!
        </SmallTextElement>
      </section>
    </AnimatedPages>
  );
};

export default AboutMe;
