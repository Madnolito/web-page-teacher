import React, { useContext, useRef } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import TransitionContext from "../../context/TransitionContext"; // Ajusta la ruta si es distinta

const TransitionComponent = ({ children }) => {
  const location = useLocation();
  const { toggleCompleted } = useContext(TransitionContext);
  const nodeRef = useRef(null); // Reemplaza findDOMNode

  return (
    <SwitchTransition mode="out-in">
      <Transition
        key={location.pathname}
        timeout={500}
        nodeRef={nodeRef}
        onEnter={() => {
          toggleCompleted(false);
          gsap.set(nodeRef.current, {
            autoAlpha: 0,
            scale: 0.8,
            xPercent: -100,
          });
          gsap
            .timeline({
              paused: true,
              onComplete: () => toggleCompleted(true),
            })
            .to(nodeRef.current, {
              autoAlpha: 1,
              xPercent: 0,
              duration: 0.25,
              ease: "power2.out",
            })
            .to(nodeRef.current, {
              scale: 1,
              duration: 0.25,
              ease: "power2.out",
            })
            .play();
        }}
        onExit={() => {
          gsap
            .timeline({ paused: true })
            .to(nodeRef.current, {
              scale: 0.8,
              duration: 0.2,
              ease: "power2.inOut",
            })
            .to(nodeRef.current, {
              xPercent: 100,
              autoAlpha: 0,
              duration: 0.2,
              ease: "power2.inOut",
            })
            .play();
        }}
      >
        <div ref={nodeRef} style={{ width: "100%" }}>
          {children}
        </div>
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
