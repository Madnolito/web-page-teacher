import { Typography } from "@mui/material";
import { animate, hover } from "motion";
import { splitText } from "motion-plus";
import { useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";

export default function ScatterTypography() {
  const containerRef = useRef(null);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevEvent = useRef(0);

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
    if (!containerRef.current) return;

    const { chars } = splitText(containerRef.current.querySelector(".scatter-text"));

    const handlePointerMove = (event) => {
      const now = performance.now();
      const delta = (now - prevEvent.current) / 1000;
      prevEvent.current = now;
      velocityX.set(event.movementX / delta);
      velocityY.set(event.movementY / delta);
    };

    document.addEventListener("pointermove", handlePointerMove);

    hover(chars, (el) => {
      const speed = Math.hypot(velocityX.get(), velocityY.get());
      const angle = Math.atan2(velocityY.get(), velocityX.get());
      const distance = speed * 0.1;

      animate(
        el,
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        },
        { type: "spring", stiffness: 100, damping: 50 }
      );
    });

    return () => document.removeEventListener("pointermove", handlePointerMove);
  }, [velocityX, velocityY]);

  return (
    <div className="scatter-container" ref={containerRef}>
      <Typography
        variant="h4"
        className="scatter-text"
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Tengo una animación muy cool
      </Typography>
      <style>{`
        .scatter-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
        }

        .split-char {
          will-change: transform, opacity;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
