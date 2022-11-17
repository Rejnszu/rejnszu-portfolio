import React, { useContext } from "react";
import { motion } from "framer-motion";
import styles from "./PracticalSkills.module.scss";
import Counter from "../../components/PracticalSkills/Counter";
import AnimatedPages from "../../components/UI/AnimatedPages";
import Heading from "../../components/UI/Heading";
import SmallTextElement from "../../components/UI/SmallTextElement";
import { practicalSkills } from "../../components/PracticalSkills/PracticalSkillsList";
import PracticalSkillItem from "../../components/PracticalSkills/PracticalSkillItem";
import { GlobalVariablesContext } from "../../context/GlobalVariables";
import { ENGLISH_VERSION, POLISH_VERSION } from "./PracticalSkillsLanguage";
const PracticalSkills = () => {
  const { isMobile, isPolish } = useContext(GlobalVariablesContext);
  const content = isPolish ? POLISH_VERSION : ENGLISH_VERSION;
  return (
    <AnimatedPages page="practicalskills">
      <main className={`section-padding default-page`}>
        <Heading text={content.header} />
        <div className={styles["practical-skills__counter-wrapper"]}>
          <Counter
            estimated={true}
            title={content.counters.firstCounter}
            number={20}
            duration={2000}
            delay={1000}
          />
          <Counter
            estimated={true}
            title={content.counters.secondCounter}
            number={350}
            duration={2000}
            delay={1500}
          />
          <Counter
            estimated={true}
            title={content.counters.thirdCounter}
            number={600}
            duration={2000}
            delay={2000}
          />
        </div>
        <div className={styles["practical-skills__skills-wrapper"]}>
          <div className={styles["practical-skills__inner-wrapper"]}>
            <SmallTextElement delay={isMobile ? 0 : 3} flexPosition="center">
              {content.firstTextElement}
            </SmallTextElement>
            <ul className={styles["practical-skills__list"]}>
              {(isPolish
                ? practicalSkills.general__Polish
                : practicalSkills.general__English
              ).map((skill, i) => {
                return (
                  <PracticalSkillItem
                    key={Math.random() * 1000}
                    delay={isMobile ? -4 : i * 0.3}
                  >
                    {skill}
                  </PracticalSkillItem>
                );
              })}
            </ul>
          </div>
          <motion.span
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.5 }}
            className={styles["skills__spacer"]}
          />
          <div className={styles["practical-skills__inner-wrapper"]}>
            <SmallTextElement delay={isMobile ? 0 : 5} flexPosition="center">
              {content.secondTextElement}
            </SmallTextElement>
            <ul className={styles["practical-skills__list"]}>
              {(isPolish
                ? practicalSkills.features__Polish
                : practicalSkills.features__English
              ).map((skill, i) => {
                return (
                  <PracticalSkillItem
                    key={Math.random() * 1000}
                    delay={isMobile ? -4 : i * 0.3 + 2}
                  >
                    {skill}
                  </PracticalSkillItem>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </AnimatedPages>
  );
};

export default PracticalSkills;
