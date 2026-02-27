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
          to: timelineRoot.current.offsetTop,
        },
        borderRadius: "4px",
      });
      tl.add(
        ".time2",
        {
          y: {
            to: timelineRoot.current.offsetTop,
          },
          borderWidth: "30px",
        },
        500,
      );
      tl.add(
        ".time3",
        {
          y: {
            to: timelineRoot.current.offsetTop,
          },
          borderRadius: "0px",
          width: [{ to: "70px" }, { to: "10px" }, { to: "50px" }],
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
  }, [scope, timelineRoot]);

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
              value={0}
              onChange={() => {
                console.log("change");
              }}
              className="range"
            />
            <button className="button play-pause">Play</button>
          </fieldset>
        </div>
        <div className="w-full">
          <div className="flex row py-4 justify-around">
            <div className="time1 concave h-14 w-14 rounded-2xl border-2 border-red-300"></div>
            <div className="time2 concave h-14 w-14 rounded-2xl border-2 border-green-300 outline-green-300 outline-2"></div>
            <div className="time3 concave h-14 w-14 rounded-2xl border-2 border-blue-300"></div>
          </div>
        </div>
      </div>
    </>
  );
}
