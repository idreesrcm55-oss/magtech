import { motion, useReducedMotion } from "framer-motion";

/** Subtle fade + slide-up when the element scrolls into view. Extra props (style, id…) pass through. */
export default function Reveal({ as = "div", delay = 0, className = "", children, ...rest }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
