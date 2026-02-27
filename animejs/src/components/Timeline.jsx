import { $, createScope, createTimeline, utils } from "animejs";
import { useEffect, useRef } from "react";

export default function Timeline({ className }) {
  const scope = useRef(null);
  const timelineRoot = useRef(null);

  useEffect(() => {
    scope.current = createScope({ timelineRoot }).add((self) => {
      //====================================================

      const [$range] = utils.$(".range");
      const [$playPauseButton] = utils.$(".play-pause");

      const updateButtonLabel = (tl) => {
        $playPauseButton.textContent = tl.paused ? "Play" : "Pause";
      };

      const tl = createTimeline({
        autoplay: false,
        onUpdate: (self) => {
          $range.value = self.currentTime;
          updateButtonLabel(self);
        },
        onComplete: updateButtonLabel,
      });

      tl.add(".time1", { y: "15rem", borderRadius: "4px" });
      tl.add(".time2", { y: "15rem" }, 500);
      tl.add(".time3", { y: "15rem" }, 1000);

      const seekTimeline = () => tl.seek(+$range.value);

      const playPauseTimeline = () => {
        if (tl.paused) {
          tl.play();
        } else {
          tl.pause();
          updateButtonLabel(tl);
        }
      };

      $range.addEventListener("input", seekTimeline);
      $playPauseButton.addEventListener("click", playPauseTimeline);
      console.log(`test`);
    });
    // Properly cleanup all anime.js instances declared inside the scope
    return () => {
      scope.current.revert();
    };
  }, []);

  return (
    <>
      <div
        ref={timelineRoot}
        className={`card timelineContainer w-full h-full ${className}`}
      >
        <div className="medium centered row">
          <fieldset className="controls">
            <input
              type="range"
              min={0}
              max={2000}
              value="defaultValue"
              className="range"
            />
            <button className="button play-pause">Play</button>
          </fieldset>
        </div>
        <div className="">
          <div className="flex row">
            <div className="time1 concave h-16 w-16 rounded-2xl"></div>
            <div className="time2 concave h-16 w-16 rounded-2xl"></div>
            <div className="time3 concave h-16 w-16 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}
