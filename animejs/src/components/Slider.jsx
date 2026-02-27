import { createDraggable, createScope, animate, spring } from "animejs";
import { useEffect, useRef } from "react";

export default function Slider({ className }) {
  const sliderRoot = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    const width = `.slider`.clientWidth;
    console.log(width);

    scope.current = createScope({ sliderRoot }).add((self) => {
      createDraggable(".sliderGrab", {
        container: ".slider",
        y: false,
        containerFriction: 1,
        x: { snap: [0, 180] },
      });
    });
    return () => scope.current.revert();
  });
  return (
    <div
      ref={sliderRoot}
      className={`slider inset h-fit overflow-hidden p-2 z-1 bg-[linear-gradient()] ${className}`}
    >
      <div className="sliderGrab circle inset align-middle place-content-center leading-none text-sm">
        |||
      </div>
    </div>
  );
}
