import { createDraggable, createScope, spring } from "animejs";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import Button from "./components/Button";
import Toggle from "./components/Toggle";
import { Animations, Animations2 } from "./components/Animations";
import Draggable from "./components/Draggable";
import SvgAnim from "./components/SvgAnim";

function App() {
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      // Every anime.js instance declared here is now scoped to <div ref={root}>
      // Created a bounce animation loop
      // animate(".logo", {
      //   scale: [
      //     { to: 1.25, ease: "inOut(3)", duration: 100 },
      //     { to: 1, ease: spring({ bounce: 0.7 }) },
      //   ],
      //   loop: true,
      // });
      // Make the logo draggable around its center
      // createDraggable(".draggable", {
      //   container: [0, 0, 0, 0],
      //   y: false,
      //   releaseEase: spring({ bounce: 0.7 }),
      // });
      // Register function methods to be used outside the useEffect
      // self.add("rotateLogo", (i) => {
      //   animate(".logo", {
      //     rotate: i * 360,
      //     ease: "out(4)",
      //     duration: 1500,
      //   });
      // });
    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current.revert();
  }, []);

  return (
    <>
      <div className="content">
        <h1>anime.js examples</h1>
        <div
          ref={root}
          className="animeroot max-w-250 grid grid-cols-1 md:grid-cols-4 grid-rows-8 md:grid-rows-2 gap-8 area inset"
        >
          <div className="centered flex flex-col area convex">
            <Slider />
            <Toggle className={"w-fit self-center"} />
            <Button text="test button" />
          </div>
          <div className="centered area flat">
            <Toggle state={false} />
            <Toggle state={true} />
          </div>
          <div className="centered area flat">
            <Animations />
          </div>
          <div className="centered area flat">
            <Animations2 />
          </div>
          <div className="centered w-full area flat">
            <SvgAnim />
          </div>
          <div className="centered col-span-2">
            <Draggable />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
