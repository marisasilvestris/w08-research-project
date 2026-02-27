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
      <div className="switch-container">
        <input className="toggle-checkbox" id="toggle-switch" type="checkbox" />
        <label className="switch" htmlFor="toggle-switch">
          <div className="toggle">
            <div className="led" />
          </div>
        </label>
      </div>
    </>
  );
}
