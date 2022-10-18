import React from "react";
import AnimatedPages from "../../components/UI/AnimatedPages";
import Heading from "../../components/UI/Heading";
import styles from "./PracticalSkills.module.scss";
const PracticalSkills = () => {
  return (
    <AnimatedPages page="practicalskills">
      <section className={`${styles["practical-skills"]} section-padding`}>
        <Heading text="Co potrafie wykonać" />
      </section>
    </AnimatedPages>
  );
};

export default PracticalSkills;
