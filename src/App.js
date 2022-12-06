import React, { useState, useEffect, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Burger from "./components/Navigation/Burger";
import Navigation from "./components/Navigation/Navigation";
import AboutMePage from "./pages/AboutMe/AboutMePage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import PracticalSkillsPage from "./pages/PracticalSkills/PracticalSkillsPage";
import CodeSkillsPage from "./pages/CodeSkills/CodeSkillsPage";
import ContactPage from "./pages/Contact/ContactPage";
import NotFound from "./components/UI/NotFound";
import ProjectDetails from "./components/Portfolio/ProjectDetails/ProjectDetails";
import ChangeLanguage from "./components/Navigation/Language/ChangeLanguage";
import { GlobalVariablesContext } from "./context/overall-context";
import LanguageLoder from "./components/UI/LanguageLoder";
import { handleLanguageOnEnter } from "./actions/langugeHandler";
let firstEnter = true;
function App() {
  const location = useLocation();
  const [displayNavigation, setDisplayNavigation] = useState(false);
  const [displayLoader, setDisplayLoader] = useState(false);
  const { changeLanguageToEnglish, changeLanguageToPolish } = useContext(
    GlobalVariablesContext
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (firstEnter) {
      handleLanguageOnEnter(changeLanguageToPolish, changeLanguageToEnglish);
      firstEnter = false;
    }
  }, [changeLanguageToPolish, changeLanguageToEnglish]);

  return (
    <div className="page-wrapper">
      {displayLoader && <LanguageLoder />}
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
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          {["/rejnszu-portfolio", "/omnie", "/"].map((path) => (
            <Route
              key={Math.random() * 100 + "key"}
              path={path}
              element={<AboutMePage />}
            />
          ))}
          <Route path="/umiejetnoscikodowania" element={<CodeSkillsPage />} />
          <Route
            path="/umiejetnoscipraktyczne"
            element={<PracticalSkillsPage />}
          />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:projectName" element={<ProjectDetails />}>
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
