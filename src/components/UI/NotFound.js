import React, { useContext } from "react";
import { GlobalVariablesContext } from "../../context/overall-context";
import SmallTextElement from "./SmallTextElement";

const NotFound = () => {
  const { isPolish } = useContext(GlobalVariablesContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "white",
      }}
    >
      <SmallTextElement delay={0.1}>
        {isPolish ? "Strona nie istnieje." : "Page doesn't exist"}
      </SmallTextElement>
    </div>
  );
};

export default NotFound;
