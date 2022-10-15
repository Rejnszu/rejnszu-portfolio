import React from "react";
import { motion } from "framer-motion";
const AnimatedPages = (props) => {
  return (
    <motion.div
      layout
      key={props.page}
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ ease: "linear", duration: 0.6 }}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimatedPages;
