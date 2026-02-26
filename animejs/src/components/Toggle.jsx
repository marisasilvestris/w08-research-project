import { animate, createScope } from "animejs";
import { useEffect, useRef, useState } from "react";

export default function Toggle({ className }) {
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root: ".toggleContainer" }).add((self) => {
      self.add("rotateLogo", (i) => {
        animate("button", {
          rotate: i * 360,
          ease: "out(4)",
          duration: 1500,
        });
      });
    });

    return () => scope.current.revert();
  }, []);

  return (
    <>
      <label className="toggleContainer label inline-flex align-items-center cursor-pointer text-[rgb(57,74,86)] m-4 w-fit popout">
        <div className="toggle isolate relative h-7.5 w-15 rounded-[15px] overflow-hidden popout">
          <input
            className="toggle-state hidden"
            type="checkbox"
            name="check"
            value={"defaultValue"}
            // onClick={handleClick}
          />
          <div className="indicator h-full w-[200%] rounded-[15px] convex border-2 border-green-300"></div>
        </div>
      </label>
    </>
  );
}
