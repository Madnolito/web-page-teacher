import { useEffect } from "react";

export function useBounceInterval(controls, seconds = 5, distance = 5) {
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: 1,
        y: [0, -distance, 0],
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      });
    }, seconds * 1000);

    return () => clearInterval(interval);
  }, [controls, seconds, distance]);
}

export function useRotateYInterval(controls, seconds = 5) {
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        rotateX: [0, 360],
        transition: {
          duration: 1.7,
          ease: "easeInOut",
        },
      });
    }, seconds * 1000);

    return () => clearInterval(interval);
  }, [controls, seconds]);
}