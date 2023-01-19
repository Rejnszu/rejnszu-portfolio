import React, { useEffect, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutMePage from "./pages/AboutMe/AboutMePage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import PracticalSkillsPage from "./pages/PracticalSkills/PracticalSkillsPage";
import CodeSkillsPage from "./pages/CodeSkills/CodeSkillsPage";
import ContactPage from "./pages/Contact/ContactPage";
import NotFound from "./components/UI/NotFound";
import ProjectDetails from "./components/Portfolio/ProjectDetails/ProjectDetails";
import Layout from "./components/Layout/Layout";
import { GlobalVariablesContext } from "./context/overall-context";
import { handleLanguageOnEnter } from "./utils/langugeHandler";
let firstEnter = true;

function App() {
  const location = useLocation();
  const { changeLanguageToEnglish, changeLanguageToPolish } = useContext(
    GlobalVariablesContext
  );

  useEffect(() => {
    if (firstEnter) {
      handleLanguageOnEnter(changeLanguageToPolish, changeLanguageToEnglish);
      firstEnter = false;
    }
  }, [changeLanguageToPolish, changeLanguageToEnglish]);

  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
