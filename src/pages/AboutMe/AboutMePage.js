import React, { useContext } from "react";
import styles from "./AboutMe.module.scss";
import AnimatedPages from "../../components/UI/AnimatedPages";
import Heading from "../../components/UI/Heading";
import myPhoto from "../../assets/others/myphoto.png";

import DescriptionItem from "../../components/AboutMe/DescriptionItem";
import CustomLink from "../../components/UI/CustomLink";
import { motion } from "framer-motion";
import SmallTextElement from "../../components/UI/SmallTextElement";
import { GlobalVariablesContext } from "../../context/overall-context";

import { POLISH__VERSION, ENGLISH__VERSION } from "./AboutMeLanguages";
import ImageSection from "../../components/AboutMe/ImageSection";
const AboutMe = () => {
  const { isMobile, isPolish } = useContext(GlobalVariablesContext);
  const content = isPolish ? POLISH__VERSION : ENGLISH__VERSION;

  return (
    <AnimatedPages page="aboutme">
      <main className={`section-padding default-page`}>
        <Heading text={content.header} />
        <div className={styles["about-me__informations"]}>
          <ImageSection />
          <div className={styles["informations__description"]}>
            <DescriptionItem title={content.firstDescription.title} delay={1.2}>
              {content.firstDescription.description}
            </DescriptionItem>
            <DescriptionItem
              title={content.secondDescription.title}
              delay={1.7}
            >
              {content.secondDescription.description__part1}{" "}
              <CustomLink delay={isMobile ? 0.3 : 2} href={content.coverLetter}>
                {content.secondDescription.description__part2}
              </CustomLink>
              .
            </DescriptionItem>
            <DescriptionItem title={content.thirdDescription.title} delay={2.1}>
              {content.thirdDescription.description}
            </DescriptionItem>
            <DescriptionItem title={content.firstDescription.title} delay={2.7}>
              {content.fourthDescription.description}
            </DescriptionItem>
          </div>
        </div>
        <SmallTextElement delay={0} flexPosition="center">
          {isPolish
            ? "Wciąż za mało informacji? Sprawdź się moim"
            : "Still not enough information? Check yourself with my"}{" "}
          <CustomLink delay={0.4} href="https://rejnszu.github.io/Quiz/">
            {isPolish ? "Quizie" : "Quiz"}
          </CustomLink>
          !
        </SmallTextElement>
      </main>
    </AnimatedPages>
  );
};

export default AboutMe;
