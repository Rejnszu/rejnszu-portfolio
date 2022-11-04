import { useState, useEffect } from "react";
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
function App() {
  const location = useLocation();
  const [displayNavigation, setDisplayNavigation] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="page-wrapper">
      <AnimatePresence>
        {displayNavigation && (
          <Navigation
            onClick={() => setDisplayNavigation((prevState) => !prevState)}
          />
        )}
      </AnimatePresence>
      {!displayNavigation && (
        <Burger
          onClick={() => setDisplayNavigation((prevState) => !prevState)}
        />
      )}
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
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
