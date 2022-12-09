import React, { useRef } from "react";
import {
  scrollLeft,
  scrollRight,
} from "../../../../helperFunctions/scrollContainer";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { TbHandFinger } from "react-icons/tb";
import Button from "../../../UI/Button";
import styles from "./ProjectGallery.module.scss";
const ProjectGallery = (props) => {
  const imageOverlay = useRef(null);
  const isMultipleImage = props.images.length >= 2;
  return (
    <div className={styles["project__gallery"]}>
      <div
        ref={imageOverlay}
        className={`${styles["project-details__image"]} ${
          isMultipleImage ? styles["project-details__image--multiple"] : ""
        }`}
      >
        {props.images.map((img) => {
          return <img src={img} alt={img} key={img} loading="lazy" />;
        })}
      </div>
      {isMultipleImage && (
        <React.Fragment>
          <Button
            styles={styles["scroll-button"]}
            onClick={() => scrollLeft(imageOverlay.current, 1000)}
          >
            <AiFillCaretLeft />
          </Button>
          <Button
            styles={styles["scroll-button"]}
            onClick={() => scrollRight(imageOverlay.current, 1000)}
          >
            <AiFillCaretRight />
          </Button>
          <span className={styles["show-scroll"]}>
            <TbHandFinger />
          </span>
        </React.Fragment>
      )}
    </div>
  );
};

export default ProjectGallery;
