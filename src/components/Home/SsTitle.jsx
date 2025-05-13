import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeTitle() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          end: "top 2%",
          toggleActions: "play none none reverse", 
        },
      }
    );

    ScrollTrigger.create({
      trigger: titleRef.current,
      start: "top 60%",
      end: "top 2%",
      scrub: true,
      onEnter: () => {
        gsap.to(titleRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
        });
      },
    });
  }, []);

  return (
    <div className="home-ss-title" ref={titleRef}>
      Conoce la escuela de fútbol <br /> "Barrio Unido"
    </div>
  );
}
