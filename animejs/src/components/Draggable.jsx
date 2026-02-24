import { createDraggable, createScope, Scope, spring } from "animejs";
import { useEffect, useRef } from "react";

export default function Draggable({ className }) {
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope(".draggableContainer").add((self) => {
      createDraggable(`.draggable`, {
        container: ".draggableContainer",
        containerFriction: 1,
      });
    });
    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current.revert();
  }, []);

  return (
    <>
      <div className={`draggableContainer w-full h-full ${className}`}>
        <div className="draggable concave circle font-bold">{`(:`}</div>
      </div>
    </>
  );
}
