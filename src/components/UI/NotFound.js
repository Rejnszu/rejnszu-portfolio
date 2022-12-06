import React, { useContext } from "react";
import { GlobalVariablesContext } from "../../context/overall-context";
import SmallTextElement from "./SmallTextElement";
import { motion } from "framer-motion";

const NotFound = () => {
  const { isPolish } = useContext(GlobalVariablesContext);
  return (
    <motion.div
      key="not found"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{
        ease: "linear",
        duration: 0.5,
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "white",
        position: "absolute",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <SmallTextElement delay={0.1}>
        {isPolish ? "Strona nie istnieje." : "Page doesn't exist"}
      </SmallTextElement>
    </motion.div>
  );
};

export default NotFound;
