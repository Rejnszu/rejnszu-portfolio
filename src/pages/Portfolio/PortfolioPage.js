import React, { useState } from "react";

import AnimatedPages from "../../components/UI/AnimatedPages";
import Heading from "../../components/UI/Heading";
import SmallTextElement from "../../components/UI/SmallTextElement";
import styles from "./Portfolio.module.scss";
import ProjectItem from "../../components/Portfolio/ProjectItem";
import { webSiteProjects } from "../../components/Portfolio/ProjectsList";
import { AppProjects } from "../../components/Portfolio/ProjectsList";

const Portfolio = () => {
  const [displayedProjects, setDisplayedProjects] = useState("websites");
  return (
    <AnimatedPages page="portfolio">
      <section className={`${styles["portfolio"]} section-padding`}>
        <Heading text="Portfolio" />
        <SmallTextElement delay={0.2} flexPosition="center">
          Poniżej przedstawiam pare moich ukończonych projektów.
        </SmallTextElement>
        <div className={styles["portfolio__select"]}>
          <p
            tabIndex={0}
            onClick={(e) => {
              setDisplayedProjects("websites");
            }}
          >
            Strony
          </p>
          <p tabIndex={0} onClick={() => setDisplayedProjects("apps")}>
            Aplikacje
          </p>
        </div>

        {displayedProjects === "websites" && (
          <div className={styles["projects__wrapper"]}>
            {webSiteProjects.map((project) => {
              return (
                <ProjectItem
                  code={project.code}
                  href={project.href}
                  key={project.alt}
                  img={project.img}
                  alt={project.alt}
                  title={project.title}
                />
              );
            })}
          </div>
        )}
        {displayedProjects === "apps" && (
          <div className={styles["projects__wrapper"]}>
            {AppProjects.map((project) => {
              return (
                <ProjectItem
                  code={project.code}
                  href={project.href}
                  key={project.alt}
                  img={project.img}
                  alt={project.alt}
                  title={project.title}
                />
              );
            })}
          </div>
        )}
      </section>
    </AnimatedPages>
  );
};

export default Portfolio;
