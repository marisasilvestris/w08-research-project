import { animate, createScope, spring, stagger } from "animejs";
import { useEffect, useRef } from "react";

export function Animations({ className }) {
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

      animate(".anim1", {
        "border-color": ["#ff0000", "#00ff00", "#0000ff", "#ffffff", "#ff0000"],
        loop: true,
        duration: 10000,
      });
      animate(".anim2", {
        x: [
          { from: -50, to: 50, ease: "inOutSine" },
          { to: -50, ease: "inOutSine" },
        ],
        loop: true,
        duration: 5000,
      });

      animate(".anim3", {
        y: [
          { from: -10, to: 10, ease: "inOutSine", duration: 400 },
          { to: -10, ease: "inOutSine", duration: 400 },
        ],
        loop: true,
        duration: 5000,
      });

      animate(".anim4", {
        x: [
          { from: -50, to: 50, ease: "inOutSine" },
          { to: -50, ease: "inOutSine" },
        ],
        loop: true,
        duration: 5000,
      });
      animate(".anim4", {
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
        <div className="circle anim anim1 concave"></div>
        <div className="circle anim anim2 concave"></div>
        <div className="circle anim anim3 concave my-3"></div>
        <div className="circle anim anim4 concave my-3"></div>
      </div>
    </>
  );
}

export function Animations2({ className }) {
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope(".animations2").add((self) => {
      /// PUT A STAGGERY THING IN HERE

      animate([".anim5", ".anim6", ".anim7", ".anim8"], {
        x: [
          { from: 0, to: 30, duration: 500 },
          { from: 30, to: -30, duration: 1000 },
          { to: 0, duration: 500 },
        ],

        delay: stagger(500),
        loop: true,
      });
      // Properly cleanup all anime.js instances declared inside the scope
      return () => scope.current.revert();
    }, []);
  });

  return (
    <>
      <div
        className={`animations2 flex-col flex gap-5 items-center justify-around h-full ${className}`}
      >
        <h3>{`stagger()`}</h3>
        <div className="circle anim anim5 concave border-red-300 border-1"></div>
        <div className="circle anim anim6 concave border-yellow-300 border-1"></div>
        <div className="circle anim anim7 concave border-green-400 border-1"></div>
        <div className="circle anim anim8 concave border-blue-300 border-1"></div>
      </div>
    </>
  );
}
