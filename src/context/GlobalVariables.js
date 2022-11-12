import { useState, useEffect } from "react";
import React from "react";
export const GlobalVariablesContext = React.createContext({
  hideNextPageButton: false,
  hideNextPageButtonHandler: () => {},
  showNextPageButtonHandler: () => {},
  isMobile: window.innerWidth < 1200,
  isPolish: true,
  changeLanguageToPolish: () => {},
  changeLanguageToEnglish: () => {},
});

const GlobalVariablesContextProvider = (props) => {
  const [hideNextPageButton, setHideNextPageButton] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [isPolish, setIsPolish] = useState(true);
  useEffect(() => {
    function checkIfMobile() {
      setIsMobile(window.innerWidth < 1200);
    }
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  });

  const contextValue = {
    hideNextPageButton: hideNextPageButton,
    hideNextPageButtonHandler: () => setHideNextPageButton(true),
    showNextPageButtonHandler: () => setHideNextPageButton(false),
    isMobile: isMobile,
    isPolish: isPolish,
    changeLanguageToPolish: () => setIsPolish(true),
    changeLanguageToEnglish: () => setIsPolish(false),
  };
  return (
    <GlobalVariablesContext.Provider value={contextValue}>
      {props.children}
    </GlobalVariablesContext.Provider>
  );
};
export default GlobalVariablesContextProvider;
