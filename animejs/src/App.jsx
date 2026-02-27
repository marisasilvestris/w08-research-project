import { createDraggable, createScope, spring } from "animejs";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import { AnimsPanel1, AnimsPanel2 } from "./panels/AnimsPanel";
import Draggable from "./components/Draggable";
import DraggablePoint from "./components/DraggablePoint";
import SvgAnim from "./components/SvgAnim";
import Timeline from "./components/Timeline";
import { ButtonPanel, ButtonPanel2 } from "./panels/ButtonPanel";

function App() {
  return (
    <>
      <div className="content">
        <h1>anime.js examples</h1>
        <div className="animeroot max-w-250 grid grid-cols-1 md:grid-cols-3 grid-rows-8 md:grid-rows-3 gap-8 area inset">
          <ButtonPanel />
          <ButtonPanel2 />
          <AnimsPanel1 />
          <AnimsPanel2 />

          <div className="card centered w-full area convex">
            {/* <SvgAnim /> */}
          </div>
          <Timeline />

          <div className="card centered col-span-1 md:col-span-2">
            <Draggable />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
