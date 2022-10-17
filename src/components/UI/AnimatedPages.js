import React from "react";
import { motion } from "framer-motion";
const AnimatedPages = (props) => {
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
      {props.children}
    </motion.div>
  );
};

export default AnimatedPages;
