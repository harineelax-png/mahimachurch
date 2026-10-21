import React from "react";
import { motion, useReducedMotion } from "framer-motion";

function ScrollReveal({ children, className = "", delay = 0, ...props }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`scroll-reveal ${className}`.trim()}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
