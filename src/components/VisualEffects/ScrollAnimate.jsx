import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function ScrollAnimate({
  children,
  once = false,
  amount = 0.8,
  initialOpacity = 0,
  finalOpacity = 1,
  initialY = 100,
  finalY = 0,
  initialX = 0,
  finalX = 0,
  scale = 1,
  duration = 0.8,
  bounce = 0.3,
  delay = 0,
  type = "spring",     
  ease = "easeInOut",  
}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once, amount }}
      variants={{
        offscreen: {
          opacity: initialOpacity,
          y: initialY,
          x: initialX,
          scale: scale !== 1 ? 0.9 : scale,
        },
        onscreen: {
          opacity: finalOpacity,
          y: finalY,
          x: finalX,
          scale,
          transition: {
            type,
            ease,
            bounce,
            duration,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

ScrollAnimate.propTypes = {
    children: PropTypes.node,
    once: PropTypes.bool,
    amount: PropTypes.number,
    initialOpacity: PropTypes.number,
    finalOpacity: PropTypes.number,
    initialY: PropTypes.number,
    finalY: PropTypes.number,
    initialX: PropTypes.number,
    finalX: PropTypes.number,
    scale: PropTypes.number,
    duration: PropTypes.number,
    bounce: PropTypes.number,
    delay: PropTypes.number,
    type: PropTypes.oneOf([              
    "spring", "tween", "keyframes", "inertia"
    ]),
    ease: PropTypes.oneOfType([          
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number)
    ]),
    };