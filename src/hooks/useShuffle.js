import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);
const useShuffle = (element) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);
  useEffect(() => {
    function checkIfMobile() {
      setIsMobile(window.innerWidth < 650);
    }
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  });
  const [randomNode, setRandomNode] = useState(undefined);
  const shuffle = () => {
    Array.from(element.current.children).forEach((child) => {
      child.style.gridColumn = "auto";
      child.style.gridRow = "auto";
      child.style.justifyContent = "flex-start";
    });
    let randomChild;
    do {
      randomChild =
        element.current.children[
          Math.floor(Math.random() * element.current.children.length)
        ];
    } while (randomChild === randomNode);
    setRandomNode(randomChild);
    let state = Flip.getState(element.current.children);
    if (!isMobile) {
      randomChild.style.gridColumn = "1 / 4";
      randomChild.style.gridRow = "1 / 2";
      randomChild.style.justifyContent = "center";
    } else {
      randomChild.style.gridColumn = "1 / 3";
      randomChild.style.gridRow = "1 / 2";
      randomChild.style.justifyContent = "center";
    }

    Flip.from(state, {
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  };

  useEffect(() => {
    let interval = setInterval(shuffle, 4000);
    return () => {
      clearInterval(interval);
    };
  });
};

export default useShuffle;
