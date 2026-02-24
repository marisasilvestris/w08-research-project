import { animate, createScope, spring, stagger } from "animejs";
import { useEffect, useRef } from "react";

export default function Animations({ className }) {
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope(this).add((self) => {
      /// PUT A STAGGERY THING IN HERE

      // animate(".circle1", {
      //   scale: [
      //     { to: 1.5, ease: "bounce", duration: 100 },
      //     { to: 1, ease: spring({ bounce: 0.7 }) },
      //   ],
      //   loop: true,
      // });

      animate(".circle2", {
        x: [
          { from: -50, to: 50, ease: "inOutSine" },
          { to: -50, ease: "inOutSine" },
        ],
        loop: true,
        duration: 5000,
      });

      animate(".circle3", {
        y: [
          { from: -10, to: 10, ease: "inOutSine", duration: 400 },
          { to: -10, ease: "inOutSine", duration: 400 },
        ],
        loop: true,
        duration: 5000,
      });

      animate(".circle4", {
        x: [
          { from: -50, to: 50, ease: "inOutSine" },
          { to: -50, ease: "inOutSine" },
        ],
        loop: true,
        duration: 5000,
      });
      animate(".circle4", {
        y: [
          { from: 10, to: -10, ease: "inOutSine", duration: 400 },
          { to: 10, ease: "inOutSine", duration: 400 },
        ],
        loop: true,
        duration: 5000,
      });

      // Properly cleanup all anime.js instances declared inside the scope
      return () => scope.current.revert();
    }, []);
  });

  return (
    <>
      <div
        className={`animations flex-col flex gap-5 items-center ${className}`}
      >
        <div className="circle circle1 concave"></div>
        <div className="circle circle2 concave"></div>
        <div className="circle circle3 concave my-3"></div>
        <div className="circle circle4 concave my-3"></div>
      </div>
    </>
  );
}
export function Animations2({ className }) {
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope(".animations").add((self) => {
      /// PUT A STAGGERY THING IN HERE

      // animate(".circle1", {
      //   scale: [
      //     { to: 1.5, ease: "bounce", duration: 100 },
      //     { to: 1, ease: spring({ bounce: 0.7 }) },
      //   ],
      //   loop: true,
      // });

      // Properly cleanup all anime.js instances declared inside the scope
      return () => scope.current.revert();
    }, []);
  });

  return (
    <>
      <div
        className={`animations flex-col flex gap-5 items-center ${className}`}
      >
        <div className="circle circle1 concave"></div>
        <div className="circle circle2 concave"></div>
        <div className="circle circle3 concave my-3"></div>
        <div className="circle circle4 concave my-3"></div>
      </div>
    </>
  );
}
