import React from "react";
import AnimatedPages from "../../components/UI/AnimatedPages";
import styles from "./CodeSkills.module.scss";
import SkillItem from "../../components/CodeSkills/SkillItem";
import Heading from "../../components/UI/Heading";
import SmallTextElement from "../../components/UI/SmallTextElement";
const skills = [
  { name: "HTML", percent: "80%" },
  { name: "CSS", percent: "80%" },
  { name: "Sass", percent: "50%" },
  { name: "BOOTSTRAP", percent: "70%" },
  { name: "JAVASCRIPT", percent: "70%" },
  { name: "REACT", percent: "65%" },
  { name: "REDUX", percent: "80%" },
  { name: "WORDPRESS", percent: "40%" },
  { name: "PHP", percent: "30%" },
  { name: "GIT", percent: "60%" },
];

const CodeSkills = () => {
  return (
    <AnimatedPages page="codeskills">
      <section className={`${styles["code-skills"]} section-padding`}>
        <Heading
          name="aboutme-heading"
          text="Technologie z których korzystam na codzień"
        />
        <SmallTextElement delay={0.2} flexPosition="center">
          Wraz z przybliżonym poziomem zaawansowania
        </SmallTextElement>
        <div className={styles["skills"]}>
          <ul className={styles["skills__list"]}>
            {skills.map((skill, index) => {
              return (
                <SkillItem
                  index={index}
                  key={index}
                  name={skill.name}
                  percent={skill.percent}
                />
              );
            })}
          </ul>
        </div>
        <SmallTextElement delay={0.5} flexPosition="center">
          Ocena jest oczywiście subiektywna
        </SmallTextElement>
      </section>
    </AnimatedPages>
  );
};

export default CodeSkills;
