import React from "react";
import SmallTextElement from "./SmallTextElement";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "var(--backgroundColor)",
        color: "white",
      }}
    >
      <SmallTextElement delay={0.1}>Strona nie istnieje.</SmallTextElement>
    </div>
  );
};

export default NotFound;
