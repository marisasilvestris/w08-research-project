import { createScope, createTimeline, utils } from "animejs";
import { useEffect, useRef } from "react";

export default function Timeline({ className }) {
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root: ".timelineContainer" }).add((self) => {
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
      })
        .add(".circle", { x: "15rem" })
        .add(".triangle", { x: "15rem" }, 500)
        .add(".square", { x: "15rem" }, 1000);

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

      //====================================================

      // const [range] = utils.$(".range");
      // const [$playPauseButton] = utils.$(".play-pause");

      // const updateButtonLabel = (tl) => {
      //   $playPauseButton.textContent = tl.paused ? "Play" : "Pause";
      // };

      // const tl = createTimeline({
      //   autoplay: false,
      //   onUpdate: (self) => {
      //     range.value = self.currentTime;
      //     updateButtonLabel(self);
      //   },
      //   onComplete: updateButtonLabel,
      // }).add(".timeElement", { x: 200 });

      // const seekTimeline = () => {
      //   tl.seek(+range.value);
      // };

      // const playPauseTimeline = () => {
      //   if (tl.paused) {
      //     tl.play();
      //   } else {
      //     tl.pause();
      //     updateButtonLabel(tl);
      //   }
      // };

      // range.addEventListener("input", seekTimeline);
      // $playPauseButton.addEventListener("click", playPauseTimeline);
    });
    // Properly cleanup all anime.js instances declared inside the scope
    return () => {
      scope.current.revert();
    };
  }, []);

  return (
    <>
      <div className={`timelineContainer w-full h-full ${className}`}>
        {/* <div className="medium centered row">
          <fieldset className="controls">
            <input
              type="range"
              min={0}
              max={2000}
              value={0}
              className="range"
            />
            <button className="button play-pause">Play</button>
          </fieldset>
        </div> */}
        <div className="large row">
          <div className="medium pyramid">
            <div className="triangle bg-cyan-200 h-8 w-8 rounded-2xl"></div>
            <div className="square bg-emerald-300 h-8 w-8 rounded-2xl"></div>
            <div className="circle bg-purple-200 h-8 w-8"></div>
          </div>
        </div>
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

        {/* <div className="timeElement circle2 rounded-2xl h-8 w-8 font-bold flat">{`(:`}</div> */}
      </div>
    </>
  );
}
