import { createDraggable, createScope } from "animejs";
import { useEffect, useRef } from "react";

export default function Draggable({ className }) {
  const scope = useRef(null);
  const draggableRoot = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root: ".draggableRoot" }).add(() => {
      createDraggable(`.draggable`, {
        container: ".draggableContainer",
        containerFriction: 1,
      });
    });
    // Properly cleanup all anime.js instances declared inside the scope
    return () => {
      scope.current.revert();
    };
  }, []);

  return (
    <>
      <div
        ref={draggableRoot}
        className={`draggableContainer inset w-full h-full overflow-hidden z-1 ${className}`}
      >
        <div className="draggable concave h-12 w-12 place-content-center font-bold leading-none border-amber-500 border-2">{`(:`}</div>
      </div>
    </>
  );
}
