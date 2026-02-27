import { animate, createScope } from "animejs";
import { useEffect, useRef } from "react";

export function Anims1({ className }) {
  const scope = useRef(null);
  const animsRoot = useRef(null);

  useEffect(() => {
    scope.current = createScope({ animsRoot }).add(() => {
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
    });
  }, []);

  return (
    <>
      <div
        ref={animsRoot}
        className={`animations flex-col flex gap-5 items-center w-full h-full ${className}`}
      >
        <h3>{`animate() stacking`}</h3>
        <div className="circle anim anim1 concave border-2"></div>
        <div className="circle anim anim2 concave"></div>
        <div className="circle anim anim3 concave my-3"></div>
        <div className="circle anim anim4 concave border-2"></div>
      </div>
    </>
  );
}
