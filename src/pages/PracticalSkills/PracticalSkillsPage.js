import React from "react";
import Counter from "../../components/PracticalSkills/Counter";
import AnimatedPages from "../../components/UI/AnimatedPages";
import Heading from "../../components/UI/Heading";
import SmallTextElement from "../../components/UI/SmallTextElement";
import styles from "./PracticalSkills.module.scss";
import { motion } from "framer-motion";
import { practicalSkills } from "../../components/PracticalSkills/PracticalSkillsList";
import PracticalSkillItem from "../../components/PracticalSkills/PracticalSkillItem";
const PracticalSkills = () => {
  return (
    <AnimatedPages page="practicalskills">
      <section className={`${styles["practical-skills"]} section-padding`}>
        <Heading text="Co mogę dla Ciebie wykonać" />
        <div className={styles["practical-skills__counter-wrapper"]}>
          <Counter
            estimated={true}
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
            <SmallTextElement
              delay={window.innerWidth > 1300 ? 3 : 0}
              flexPosition="center"
            >
              Zaskutkowało tym że potrafie wykonać:
            </SmallTextElement>
            <ul className={styles["practical-skills__list"]}>
              {practicalSkills.general.map((skill, i) => {
                return (
                  <PracticalSkillItem
                    key={Math.random() * 1000}
                    delay={window.innerWidth > 1300 ? i * 0.3 : -4}
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
            <SmallTextElement
              delay={window.innerWidth > 1300 ? 5 : 0}
              flexPosition="center"
            >
              Jestem w stanie zapewnić:
            </SmallTextElement>
            <ul className={styles["practical-skills__list"]}>
              {practicalSkills.features.map((skill, i) => {
                return (
                  <PracticalSkillItem
                    key={Math.random() * 1000}
                    delay={window.innerWidth > 1300 ? i * 0.3 + 2 : -4}
                  >
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
