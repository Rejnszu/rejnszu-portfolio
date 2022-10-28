import React, { useState, useRef } from "react";

import AnimatedPages from "../../components/UI/AnimatedPages";
import Heading from "../../components/UI/Heading";
import SmallTextElement from "../../components/UI/SmallTextElement";
import styles from "./Portfolio.module.scss";
import ProjectItem from "../../components/Portfolio/ProjectItem";
import { webSiteProjects } from "../../components/Portfolio/ProjectsList";
import { appProjects } from "../../components/Portfolio/ProjectsList";

const Portfolio = () => {
  const selectRef = useRef(null);

  const [displayedProjects, setDisplayedProjects] = useState("websites");
  const changeDisplayedProjects = (e) => {
    Array.from(selectRef.current.children).forEach((child) =>
      child.classList.remove(`${styles["active"]}`)
    );
    e.currentTarget.classList.add(`${styles["active"]}`);
    setDisplayedProjects(e.currentTarget.getAttribute("data-display"));
  };
  return (
    <AnimatedPages page="portfolio">
      <section
        className={`${styles["portfolio"]} section-padding default-page`}
      >
        <Heading text="Portfolio" />
        <SmallTextElement delay={0.2} flexPosition="center">
          Poniżej przedstawiam pare moich ukończonych projektów.
        </SmallTextElement>
        <div ref={selectRef} className={styles["portfolio__select"]}>
          <p
            data-display="websites"
            className={styles["active"]}
            onClick={changeDisplayedProjects}
          >
            Strony
          </p>
          <p data-display="apps" onClick={changeDisplayedProjects}>
            Aplikacje
          </p>
        </div>

        {displayedProjects === "websites" && (
          <div className={styles["projects__wrapper"]}>
            {webSiteProjects.map((project, i) => {
              return <ProjectItem {...project} key={project.alt} />;
            })}
          </div>
        )}
        {displayedProjects === "apps" && (
          <div className={styles["projects__wrapper"]}>
            {appProjects.map((project) => {
              return <ProjectItem {...project} key={project.alt} />;
            })}
          </div>
        )}
      </section>
    </AnimatedPages>
  );
};

export default Portfolio;
