import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Burger from "./components/Navigation/Burger";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import PracticalSkills from "./pages/PracticalSkills";
import CodeSkills from "./pages/CodeSkills";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  const [displayNavigation, setDisplayNavigation] = useState(false);
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
          <Route path="/" element={<AboutMe />} />
          <Route path="/omnie" element={<AboutMe />} />
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
