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
const AboutMe = () => {
  const { isMobile, isPolish } = useContext(GlobalVariablesContext);
  const content = isPolish ? POLISH__VERSION : ENGLISH__VERSION;

  return (
    <AnimatedPages page="aboutme">
      <main className={`section-padding default-page`}>
        <Heading text={content.header} />
        <div className={styles["about-me__informations"]}>
          <div className={styles["informations__my-photo__wrapper"]}>
            <div className={styles["image-inner-wrapper"]}>
              <motion.img
                initial={{ y: "-100px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                src={myPhoto}
                className={styles["informations__my-photo"]}
                alt="photo_of_me"
              />
              <motion.span
                initial={{ y: "200px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className={styles["background-blur"]}
              />
              <motion.span
                initial={{ x: "-200px", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={styles.box}
              />
            </div>
          </div>

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
