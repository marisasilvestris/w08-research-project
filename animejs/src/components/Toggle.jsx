import { animate, createScope } from "animejs";
import { useEffect, useRef, useState } from "react";

export default function Toggle({ className }) {
  const scope = useRef(null);
  const toggleRoot = useRef(null);

  useEffect(() => {
    scope.current = createScope({ toggleRoot }).add((self) => {
      self.add(`onClick`, () => {
        animate(`.toggle`, {
          borderColor: "red",
          x: parent.innerHeight,
        });
      });
    });

    return () => scope.current.revert();
  }, []);

  return (
    <>
      <label className="cursor-pointer relative h-[3em] w-[6em] rounded-full popout ">
        <span className="absolute inset-[0.1em] rounded-full outline-2"></span>
        <div className="absolute left-[0.5em] top-1/2 flex h-[2em] w-[2em] -translate-y-1/2 items-center justify-center rounded-full shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]">
          <div className="h-[1.5em] w-[1.5em] rounded-full outline-2 shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]"></div>
        </div>
        <div className="absolute right-[0.5em] top-1/2 h-[0.25em] w-[1.5em] -translate-y-1/2 rounded-full bg-green-300 border-1 border-green-300"></div>
        <input
          className="peer h-[1em] w-[1em] cursor-pointer opacity-0"
          id=""
          name=""
          type="checkbox"
        />
        <span className="absolute left-[0.25em] top-1/2 flex h-[2.5em] w-[2.5em] -translate-y-1/2 items-center justify-center rounded-full  duration-300 peer-checked:left-[calc(100%-2.75em)] border-4 peer-checked:border-green-300 peer-checked:border-4  overflow-hidden z-1">
          <span className="relative h-full w-full rounded-full">
            <span className="absolute inset-[0.1em] rounded-full convex"></span>
          </span>
        </span>
      </label>
    </>
  );
}
