import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Burger from "./components/Navigation/Burger";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";
import Portfolio from "./pages/Portfolio/Portfolio";
import PracticalSkills from "./pages/PracticalSkills";
import CodeSkills from "./pages/CodeSkills/CodeSkills";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
function App() {
  const location = useLocation();
  const [displayNavigation, setDisplayNavigation] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="page-wrapper">
      <AnimatePresence exitBeforeEnter>
        {displayNavigation && (
          <Navigation
            onClick={() => setDisplayNavigation((prevState) => !prevState)}
          ></Navigation>
        )}
      </AnimatePresence>
      {!displayNavigation && (
        <Burger
          onClick={() => setDisplayNavigation((prevState) => !prevState)}
        />
      )}
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          {["/rejnszu-portfolio", "/omnie", "/"].map((path) => (
            <Route path={path} element={<AboutMe />} />
          ))}

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/umiejetnoscipraktyczne" element={<PracticalSkills />} />
          <Route path="/umiejetnoscikodowania" element={<CodeSkills />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
