import React, { useState } from "react";

import AnimatedPages from "../../components/UI/AnimatedPages";
import Heading from "../../components/UI/Heading";
import SmallTextElement from "../../components/UI/SmallTextElement";
import styles from "./Portfolio.module.scss";
import ProjectItem from "./ProjectItem";
import { webSiteProjects } from "./ProjectsList";
import { AppProjects } from "./ProjectsList";

const Portfolio = () => {
  const [displayedProjects, setDisplayedProjects] = useState("websites");
  return (
    <AnimatedPages page="portfolio">
      <section className={`${styles["portfolio"]} section-padding`}>
        <Heading text="Portfolio" />
        <SmallTextElement flexPosition="center">
          Poniżej przedstawiam pare moich ukończonych projektów.
        </SmallTextElement>
        <div className={styles["portfolio__select"]}>
          <p
            tabIndex={0}
            onClick={(e) => {
              setDisplayedProjects("websites");
            }}
          >
            Strony internetowe
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
