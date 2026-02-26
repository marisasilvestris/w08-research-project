import { animate, createScope, spring, stagger } from "animejs";
import { useEffect, useRef } from "react";

export function Animations({ className }) {
  const scope = useRef(null);
  const animRoot = useRef(null);

  useEffect(() => {
    scope.current = createScope({ animRoot }).add((self) => {
      /// PUT A STAGGERY THING IN HERE

      // animate(".circle1", {
      //   scale: [
      //     { to: 1.5, ease: "bounce", duration: 100 },
      //     { to: 1, ease: spring({ bounce: 0.7 }) },
      //   ],
      //   loop: true,
      // });

      animate([".anim1", ".anim4"], {
        "border-color": ["#ffa2a2", "#ffdf20", "#7bf1a8", "#8ec5ff", "#ffa2a2"],
        loop: true,
        duration: 4000,
      });
      animate([".anim2", ".anim4"], {
        x: [
          { from: -50, to: 50, ease: "linear" },
          { to: -50, ease: "linear" },
        ],
        loop: true,
        duration: 5000,
      });

      animate([".anim3", ".anim4"], {
        y: [
          { from: -10, to: 10, ease: "inQuad", duration: 400 },
          { to: -10, ease: "outQuad", duration: 400 },
        ],
        loop: true,
        duration: 4000,
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
        <h3>{`animation stacking`}</h3>
        <div className="circle anim anim1 concave border-2"></div>
        <div className="circle anim anim2 concave"></div>
        <div className="circle anim anim3 concave my-3"></div>
        <div className="circle anim anim4 concave border-2"></div>
      </div>
    </>
  );
}

export function Animations2({ className }) {
  const scope = useRef(null);
  const anim2Root = useRef(null);

  useEffect(() => {
    scope.current = createScope({ anim2Root }).add((self) => {
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
        ref={anim2Root}
        className={`animations2 flex-col flex gap-5 items-center justify-around h-full ${className}`}
      >
        <h3>{`stagger()`}</h3>
        <div className="circle anim anim5 concave border-red-300 border-2"></div>
        <div className="circle anim anim6 concave border-yellow-300 border-2"></div>
        <div className="circle anim anim7 concave border-green-300 border-2"></div>
        <div className="circle anim anim8 concave border-blue-300 border-2"></div>
      </div>
    </>
  );
}
