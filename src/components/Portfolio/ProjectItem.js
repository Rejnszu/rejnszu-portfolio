import React, { useContext } from "react";
import styles from "./ProjectItem.module.scss";
import Button from "../../components/UI/Button";
import { TfiWorld } from "react-icons/tfi";
import { BiCodeAlt } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import { GlobalVariablesContext } from "../../context/overall-context";
import { Link } from "react-router-dom";

const ProjectItem = (props) => {
  const { img, title, href, code, inProgress, route } = props;
  const { isPolish } = useContext(GlobalVariablesContext);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-100px 0px -100px 0px",
    triggerOnce: true,
  });
  return (
    <React.Fragment>
      <div
        ref={ref}
        className={`${styles.project} ${
          inProgress ? styles["in-progress"] : ""
        } ${inView ? styles.animate : ""}`}
      >
        {inProgress && (
          <div className={styles.cone}>
            <img
              src={require("../../assets/others/cone.png")}
              alt="https://www.flaticon.com/free-icons/cone"
            />
          </div>
        )}
        <a
          target="_blank"
          rel="noreferrer"
          className={`${styles["project__reference"]} ${styles["project__reference--link"]}`}
          href={href}
        >
          <TfiWorld />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className={`${styles["project__reference"]} ${styles["project__reference--code"]}`}
          href={code}
        >
          <BiCodeAlt />
        </a>
        <img
          loading="lazy"
          className={styles["project__image"]}
          src={img[0]}
          alt={title}
        />
        <p className={styles["project__title"]}>{title}</p>
        <Link className={styles["project__link"]} to={route}>
          <Button>
            {isPolish ? "Więcej informacji" : "More informations"}
          </Button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ProjectItem;
