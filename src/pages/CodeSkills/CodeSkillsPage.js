import React, { useContext } from "react";
import styles from "./CodeSkills.module.scss";
import AnimatedPages from "../../components/UI/AnimatedPages";
import SkillItem from "../../components/CodeSkills/SkillItem";
import Heading from "../../components/UI/Heading";
import SmallTextElement from "../../components/UI/SmallTextElement";
import { skills } from "../../components/CodeSkills/SkillsList";
import { GlobalVariablesContext } from "../../context/GlobalVariables";
import { ENGLISH_VERSION, POLISH_VERSION } from "./CodeSkillsLanguage";
const CodeSkills = () => {
  const { isMobile, isPolish } = useContext(GlobalVariablesContext);
  const content = isPolish ? POLISH_VERSION : ENGLISH_VERSION;
  return (
    <AnimatedPages page="codeskills">
      <main className={"section-padding default-page"}>
        <Heading name="aboutme-heading" text={content.header} />
        <SmallTextElement delay={isMobile ? 0.2 : 1} flexPosition="center">
          {content.firstTextElement}
        </SmallTextElement>
        <div className={styles["skills"]}>
          <ul className={styles["skills__list"]}>
            {skills.map((skill, index) => {
              return <SkillItem index={index} key={index} {...skill} />;
            })}
          </ul>
        </div>
        <SmallTextElement delay={isMobile ? 0.5 : 2.5} flexPosition="center">
          {content.secondTextElement}
        </SmallTextElement>
      </main>
    </AnimatedPages>
  );
};

export default CodeSkills;
