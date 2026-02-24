import { createDraggable, createScope, createTimeline, spring } from "animejs";
import { useEffect, useRef } from "react";

export default function Timeline({ className }) {
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope(".draggableContainer").add((self) => {
      const timeline = createTimeline();

      timeline.label(`playback`).add(`.timeElement`);

      // Properly cleanup all anime.js instances declared inside the scope
      return () => scope.current.revert();
    }, []);

    return (
      <>
        <div className={`timelineContainer w-full h-full ${className}`}>
          <div className="timeElement circle font-bold">{`(:`}</div>
        </div>
      </>
    );
  });
}
