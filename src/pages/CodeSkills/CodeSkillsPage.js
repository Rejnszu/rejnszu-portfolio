import React, { useContext } from "react";
import styles from "./CodeSkills.module.scss";
import AnimatedPages from "../../components/UI/AnimatedPages";
import SkillItem from "../../components/CodeSkills/SkillItem";
import Heading from "../../components/UI/Heading";
import SmallTextElement from "../../components/UI/SmallTextElement";
import { skills } from "../../components/CodeSkills/SkillsList";
import { GlobalVariablesContext } from "../../context/GlobalVariables";
const CodeSkills = () => {
  const isMobile = useContext(GlobalVariablesContext).isMobile;
  return (
    <AnimatedPages page="codeskills">
      <section className={"section-padding default-page"}>
        <Heading
          name="aboutme-heading"
          text="Technologie z których korzystam na co dzień"
        />
        <SmallTextElement delay={isMobile ? 0.2 : 1} flexPosition="center">
          Wraz z przybliżonym poziomem zaawansowania
        </SmallTextElement>
        <div className={styles["skills"]}>
          <ul className={styles["skills__list"]}>
            {skills.map((skill, index) => {
              return <SkillItem index={index} key={index} {...skill} />;
            })}
          </ul>
        </div>
        <SmallTextElement delay={isMobile ? 0.5 : 2.5} flexPosition="center">
          Ocena jest oczywiście subiektywna
        </SmallTextElement>
      </section>
    </AnimatedPages>
  );
};

export default CodeSkills;
