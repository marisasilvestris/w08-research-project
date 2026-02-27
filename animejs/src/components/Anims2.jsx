import { animate, createScope, stagger } from "animejs";
import { useEffect, useRef } from "react";

export function Anims2({ className }) {
  const scope = useRef(null);
  const animsRoot2 = useRef(null);

  useEffect(() => {
    scope.current = createScope({ animsRoot2 }).add((self) => {
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
    });
  }, []);

  return (
    <>
      <div
        ref={animsRoot2}
        className={`animations2 flex-col flex gap-5 items-center justify-around h-full ${className}`}
      >
        <h3 className="montserrat">{`stagger()`}</h3>
        <div className="circle anim anim5 concave border-red-300 border-2"></div>
        <div className="circle anim anim6 concave border-yellow-300 border-2"></div>
        <div className="circle anim anim7 concave border-green-300 border-2"></div>
        <div className="circle anim anim8 concave border-blue-300 border-2"></div>
      </div>
    </>
  );
}
