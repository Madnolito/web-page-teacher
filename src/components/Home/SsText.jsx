import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSsText() {
  const textRef = useRef(null);

useEffect(() => {
  gsap.fromTo(
    textRef.current,
    { opacity: 0, scale: 0.8, y: 100 }, // 👈 desde más abajo
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    }
  );

  ScrollTrigger.create({
    trigger: textRef.current,
    start: "top 90%",
    end: "top 2%",
    scrub: true,
    onEnter: () => {
      gsap.to(textRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      });
    },
    onLeave: () => {
      gsap.to(textRef.current, {
        opacity: 0,
        scale: 0.8,
        y: -30, // 👈 hacia arriba al salir
        duration: 0.3,
        ease: "power2.in",
      });
    },
    onEnterBack: () => {
      gsap.to(textRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(textRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 100, // 👈 hacia abajo si vuelves atrás
        duration: 0.3,
        ease: "power2.in",
      });
    },
  });
}, []);

  return (
    <div className="home-ss-text" ref={textRef}>
      Mi nombre es Rubén Santibañez, tengo 25 años, soy titulado en Pedagogía en Educación Física,
      Deportes y Recreación para educación básica y media, cuento con experiencia tanto en el ámbito
      escolar como en actividades deportivas extracurriculares.
      Mi nombre es Rubén Santibañez, tengo 25 años, soy titulado en Pedagogía en Educación Física,
      Deportes y Recreación para educación básica y media, cuento con experiencia tanto en el ámbito
      escolar como en actividades deportivas extracurriculares.
      Mi nombre es Rubén Santibañez, tengo 25 años, soy titulado en Pedagogía en Educación Física,
      Deportes y Recreación para educación básica y media, cuento con experiencia tanto en el ámbito
      escolar como en actividades deportivas extracurriculares.
    </div>
  );
}
