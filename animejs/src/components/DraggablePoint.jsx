import { createDraggable, createScope, spring } from "animejs";
import { useEffect, useRef } from "react";

export default function DraggablePoint({ className }) {
  const scope = useRef(null);
  const draggablePointRoot = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root: ".draggablePointRoot" }).add((self) => {
      const draggablePoint = self.add(
        createDraggable(`.draggablePoint`, {
          container: ".draggablePointContainer",

          releaseEase: spring({ bounce: 0.7 }),
        }),
      );
    });
    // Properly cleanup all anime.js instances declared inside the scope
    return () => {
      scope.current.revert();
    };
  }, []);

  return (
    <>
      <div
        ref={draggablePointRoot}
        className={`draggablePointContainer concave w-fit z-1 relative ${className}`}
      >
        <div className="draggablePoint convex h-16 w-16 place-content-center font-bold leading-none">{`(:`}</div>
        <p className="absolute top-0 left-0 w-16 h-16 place-content-center montserrat border-2 border-red-300 rounded-[100%] z-[-1]">{`u win`}</p>
      </div>
    </>
  );
}
