import React, { useEffect, useContext } from "react";
import ReactDom from "react-dom";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GlobalVariablesContext } from "../../context/GlobalVariables";

const AnimatedPages = (props) => {
  const globalVariablesCtx = useContext(GlobalVariablesContext);
  const location = useLocation();
  const navigate = useNavigate();

  const nextPage = () => {
    globalVariablesCtx.hideNextPageButtonHandler();
    switch (location.pathname) {
      case "/":
        navigate("/umiejetnoscikodowania");
        break;
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
  useEffect(() => {
    setTimeout(() => globalVariablesCtx.showNextPageButtonHandler(), 1);
  });
  return (
    <motion.div
      key={props.page}
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{
        ease: "linear",
        duration: 0.5,
        opacity: {
          duration: 0.3,
        },
      }}
      style={{
        position: "absolute",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {ReactDom.createPortal(
        !globalVariablesCtx.hideNextPageButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            key={props.page + "next"}
            onClick={() => nextPage()}
            className="next-page"
          >
            <AiOutlineArrowRight />
          </motion.div>
        ),
        document.getElementById("next-page")
      )}

      {props.children}
    </motion.div>
  );
};

export default AnimatedPages;
