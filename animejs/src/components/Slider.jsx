import { createDraggable, createScope, animate, spring } from "animejs";
import { useEffect, useRef } from "react";

export default function Slider({ className }) {
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope(".slider").add((self) => {
      createDraggable(".sliderGrab", {
        container: ".slider",
        y: false,
        releaseEase: spring({ bounce: 0.4 }),
        containerFriction: 1,
      });
    });
    return () => scope.current.revert();
  });
  return (
    <div className={`slider inset h-fit overflow-hidden p-2 z-1 ${className}`}>
      <div className="sliderGrab circle concave align-middle content-center text-lg">
        |||
      </div>
    </div>
  );
}
