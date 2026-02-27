import { animate, createDraggable, createScope, spring } from "animejs";
import { useEffect, useRef } from "react";

export default function Button({ text, bool, onClick, className }) {
  const buttonRoot = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      // Every anime.js instance declared here is now scoped to <div ref={root}>
      // Created a bounce animation loop
      // animate(".logo", {
      //   scale: [
      //     { to: 1.25, ease: "inOut(3)", duration: 100 },
      //     { to: 1, ease: spring({ bounce: 0.7 }) },
      //   ],
      //   loop: true,
      // });
      // Make the logo draggable around its center
      // createDraggable(".draggable", {
      //   container: [0, 0, 0, 0],
      //   y: false,
      //   releaseEase: spring({ bounce: 0.7 }),
      // });
      // Register function methods to be used outside the useEffect
      self.add("rotateLogo", (i) => {
        animate(this, {
          rotate: i * 360,
          ease: "out(4)",
          duration: 1500,
        });
      });
    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current.revert();
  }, []);
  return (
    <>
      <button
        ref={buttonRoot}
        className={`min-w-5 min-h-5 convex h-fit mx-2 ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
