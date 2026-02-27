import { createDraggable, createScope, animate, spring } from "animejs";
import { useEffect, useRef } from "react";

export default function Slider({ className }) {
  const sliderRoot = useRef(null);
  const sliderScope = useRef(null);

  useEffect(() => {
    sliderScope.current = createScope({ sliderRoot }).add((self) => {
      createDraggable(".sliderGrab", {
        container: ".slider",
        y: false,
        containerFriction: 1,
        x: { snap: [0, 100] },
      });
    });
    console.log(sliderScope);

    return () => sliderScope.current.revert();
  });
  return (
    <div
      ref={sliderRoot}
      className={`slider inset h-fit overflow-hidden p-2 z-1 w-full ${className}`}
    >
      <div className="sliderGrab circle inset align-middle place-content-center leading-none text-sm">
        |||
      </div>
    </div>
  );
}
