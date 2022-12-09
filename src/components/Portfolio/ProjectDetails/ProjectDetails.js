import React, { useContext } from "react";
import ReactDom from "react-dom";
import { useParams, useNavigate } from "react-router-dom";
import { webSiteProjects, appProjects } from "../ProjectsList";
import { motion } from "framer-motion";
import { GlobalVariablesContext } from "../../../context/overall-context";
import { RiArrowGoBackFill } from "react-icons/ri";

import styles from "./ProjectDetails.module.scss";
import Heading from "../../UI/Heading";

import ProjectGallery from "./DetailsComponents/ProjectGallery";
import Button from "../../UI/Button";
import NotFound from "../../UI/NotFound";
import ButtonsReference from "./DetailsComponents/ButtonsReference";
import Informations from "./DetailsComponents/Informations";
const ProjectDetails = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const { isPolish } = useContext(GlobalVariablesContext);
  const allProjects = webSiteProjects.concat(appProjects);
  const project = allProjects.find((project) => project.route === projectName);

  if (!project) {
    return <NotFound />;
  }
  const { img, title, href, code, technologies, description, description_EN } =
    project;

  return (
    <motion.div
      key={href}
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{
        ease: "linear",
        duration: 0.5,
      }}
      style={{
        position: "absolute",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <main className={"section-padding default-page"}>
        {ReactDom.createPortal(
          <Button
            onClick={() => navigate("/portfolio")}
            styles={styles["button--go-back"]}
          >
            <RiArrowGoBackFill />
          </Button>,
          document.getElementById("button--go-back")
        )}
        <Heading text={title} />
        <ProjectGallery images={img} />
        <ButtonsReference code={code} href={href} isPolish={isPolish} />
        <Informations
          isPolish={isPolish}
          technologies={technologies}
          description={description}
          description_EN={description_EN}
        />
      </main>
    </motion.div>
  );
};

export default ProjectDetails;
