import React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const AnimatedPages = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const nextPage = () => {
    switch (location.pathname) {
      case "/rejnszu-portfolio/":
        navigate("/umiejetnoscikodowania");
        break;
      case "/omnie":
        navigate("/umiejetnoscikodowania");
        break;
      case "/umiejetnoscikodowania":
        navigate("/umiejetnoscipraktyczne");
        break;
      case "/umiejetnoscipraktyczne":
        navigate("/portfolio");
        break;
      case "/portfolio":
        navigate("/kontakt");
        break;
      case "/kontakt":
        navigate("/omnie");
        break;
      default:
        navigate("/omnie");
        break;
    }
  };
  return (
    <motion.div
      key={props.page}
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{
        ease: "linear",
        duration: 0.5,
        opacity: {
          duration: 0.3,
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        key={props.page + "next"}
        onClick={() => nextPage()}
        className="next-page"
      >
        <AiOutlineArrowRight />
      </motion.div>
      {props.children}
    </motion.div>
  );
};

export default AnimatedPages;
