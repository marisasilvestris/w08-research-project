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

      tl.add(".time1", {
        y: {
          to: 300,
        },
        borderRadius: "4px",
      });
      tl.add(
        ".time2",
        {
          y: {
            to: 300,
          },
          borderWidth: "30px",
        },
        500,
      );
      tl.add(
        ".time3",
        {
          y: {
            to: 300,
          },
          borderRadius: "0px",
        },
        1000,
      );
      console.log({ timelineRoot });

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
        className={`card centered convex area md:row-span-2 timelineContainer  w-full h-full ${className}`}
      >
        <div className="centered">
          <fieldset className="controls flex flex-col gap-4">
            <input
              type="range"
              min={0}
              max={2000}
              value={0}
              onChange={() => {
                console.log("change");
              }}
              className="range convex h-12"
            />
            <button className="button convex play-pause">Play</button>
          </fieldset>
        </div>
        <div className="flex row py-4 justify-around">
          <div className="time1 concave circle border-2 border-red-300"></div>
          <div className="time2 concave circle border-2 border-green-300"></div>
          <div className="time3 concave circle border-2 border-blue-300"></div>
        </div>
      </div>
    </>
  );
}
