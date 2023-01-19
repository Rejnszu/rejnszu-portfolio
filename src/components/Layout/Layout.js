import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LanguageLoader from "../UI/LanguageLoader";
import Navigation from "../Navigation/Navigation";
import Burger from "../Navigation/Burger";
import ChangeLanguage from "../Navigation/Language/ChangeLanguage";
const Layout = (props) => {
  const location = useLocation();
  const [displayNavigation, setDisplayNavigation] = useState(false);
  const [displayLoader, setDisplayLoader] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ postion: "relative" }}>
      {displayLoader && <LanguageLoader />}
      <AnimatePresence>
        {displayNavigation && (
          <Navigation
            key="navigation"
            onClick={() => setDisplayNavigation((prevState) => !prevState)}
          />
        )}

        {!displayNavigation && (
          <React.Fragment>
            <Burger
              key="burger"
              onClick={() => setDisplayNavigation((prevState) => !prevState)}
            />
            <ChangeLanguage
              onClick={() => setDisplayLoader((prev) => !prev)}
              key="language"
            />
          </React.Fragment>
        )}
      </AnimatePresence>
      {props.children}
    </div>
  );
};

export default Layout;
