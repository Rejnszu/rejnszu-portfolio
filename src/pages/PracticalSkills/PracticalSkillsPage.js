import React from "react";
import Counter from "../../components/PracticalSkills/Counter";
import AnimatedPages from "../../components/UI/AnimatedPages";
import Heading from "../../components/UI/Heading";
import SmallTextElement from "../../components/UI/SmallTextElement";
import styles from "./PracticalSkills.module.scss";
import { practicalSkills } from "../../components/PracticalSkills/PracticalSkillsList";
import PracticalSkillItem from "../../components/PracticalSkills/PracticalSkillItem";
const PracticalSkills = () => {
  return (
    <AnimatedPages page="practicalskills">
      <section className={`${styles["practical-skills"]} section-padding`}>
        <Heading text="Co mogę dla Ciebie wykonać" />
        <div className={styles["practical-skills__counter-wrapper"]}>
          <Counter
            title="Wykonanych projektów"
            number={20}
            duration={2000}
            delay={1000}
          />
          <Counter
            estimated={true}
            title="Godzin spędzonych na nauce"
            number={350}
            duration={2000}
            delay={1500}
          />
          <Counter
            estimated={true}
            title="Godzin spędzonych na praktyce"
            number={600}
            duration={2000}
            delay={2000}
          />
        </div>
        <div className={styles["practical-skills__skills-wrapper"]}>
          <div className={styles["practical-skills__inner-wrapper"]}>
            <SmallTextElement delay={3} flexPosition="center">
              Zaskutkowało tym że potrafie wykonać:
            </SmallTextElement>
            <ul className={styles["practical-skills__list"]}>
              {practicalSkills.general.map((skill, i) => {
                return (
                  <PracticalSkillItem delay={i * 0.3}>
                    {skill}
                  </PracticalSkillItem>
                );
              })}
            </ul>
          </div>
          <div className={styles["practical-skills__inner-wrapper"]}>
            <SmallTextElement delay={3} flexPosition="center">
              Jestem w stanie zapewnić:
            </SmallTextElement>
            <ul className={styles["practical-skills__list"]}>
              {practicalSkills.features.map((skill, i) => {
                return (
                  <PracticalSkillItem delay={i * 0.3}>
                    {skill}
                  </PracticalSkillItem>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </AnimatedPages>
  );
};

export default PracticalSkills;
