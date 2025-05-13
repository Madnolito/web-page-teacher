import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSsText() {
  const textRef = useRef(null);

useEffect(() => {
  gsap.fromTo(
    textRef.current,
    { opacity: 0, scale: 0.8, y: 100 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        end: "top 2%",
        toggleActions: "play none none reverse",
      },
    }
  );

  ScrollTrigger.create({
    trigger: textRef.current,
    start: "top 60%",
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
