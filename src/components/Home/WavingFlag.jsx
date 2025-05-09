import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WavingFlag({ src = "/flag.png", width = 300, height = 180 }) {
  const flagRef = useRef(null);

  useEffect(() => {
    gsap.to(flagRef.current, {
      rotateZ: 1.2,
      skewX: 2,
      y: 2,
      transformOrigin: "left center",
      duration: 1.6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div
      ref={flagRef}
      style={{
        width,
        height,
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 6,
        
        willChange: "transform",
      }}
    />
  );
}
