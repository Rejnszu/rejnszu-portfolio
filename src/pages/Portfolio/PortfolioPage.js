import React, { useState, useRef, useContext } from "react";
import styles from "./Portfolio.module.scss";
import AnimatedPages from "../../components/UI/AnimatedPages";
import Heading from "../../components/UI/Heading";
import SmallTextElement from "../../components/UI/SmallTextElement";
import ProjectItem from "../../components/Portfolio/ProjectItem";
import { webSiteProjects } from "../../components/Portfolio/ProjectsList";
import { appProjects } from "../../components/Portfolio/ProjectsList";
import { GlobalVariablesContext } from "../../context/GlobalVariables";
import { ENGLISH_VERSION, POLISH_VERSION } from "./PortfolioLanguages";

const Portfolio = () => {
  const selectRef = useRef(null);
  const { isPolish } = useContext(GlobalVariablesContext);
  const [displayedProjects, setDisplayedProjects] = useState("websites");
  const content = isPolish ? POLISH_VERSION : ENGLISH_VERSION;
  const changeDisplayedProjects = (e) => {
    Array.from(selectRef.current.children).forEach((child) =>
      child.classList.remove(`${styles["active"]}`)
    );
    e.currentTarget.classList.add(`${styles["active"]}`);
    setDisplayedProjects(e.currentTarget.getAttribute("data-display"));
  };

  return (
    <AnimatedPages page="portfolio">
      <section className={"section-padding default-page"}>
        <Heading text="Portfolio" />
        <SmallTextElement delay={0.2} flexPosition="center">
          {content.firstTextElement}
        </SmallTextElement>
        <div ref={selectRef} className={styles["portfolio__select"]}>
          <p
            data-display="websites"
            className={styles["active"]}
            onClick={changeDisplayedProjects}
          >
            {content.select.first}
          </p>
          <p data-display="apps" onClick={changeDisplayedProjects}>
            {content.select.second}
          </p>
        </div>

        {displayedProjects === "websites" && (
          <div className={styles["projects__wrapper"]}>
            {webSiteProjects.map((project) => {
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
