import React from "react";
import "./transitionEffect.css";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="container-first"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      <motion.div
        className="container-second"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
      />
      <motion.div
        className="container-third"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
