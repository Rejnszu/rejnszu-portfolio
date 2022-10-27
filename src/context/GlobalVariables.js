import { useState } from "react";
import React from "react";
const GlobalVariablesContext = React.createContext({
  hideNextPageButton: false,
  hideNextPageButtonHandler: () => {},
  showNextPageButtonHandler: () => {},
});

export const GlobalVariablesContextProvider = (props) => {
  const [hideNextPageButton, setHideNextPageButton] = useState(false);
  const hideNextPageButtonHandler = () => {
    setHideNextPageButton(true);
  };
  const showNextPageButtonHandler = () => {
    setHideNextPageButton(false);
  };
  const contextValue = {
    hideNextPageButton: hideNextPageButton,
    hideNextPageButtonHandler: hideNextPageButtonHandler,
    showNextPageButtonHandler: showNextPageButtonHandler,
  };
  return (
    <GlobalVariablesContext.Provider value={contextValue}>
      {props.children}
    </GlobalVariablesContext.Provider>
  );
};
export default GlobalVariablesContext;
