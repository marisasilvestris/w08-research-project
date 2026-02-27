import Button from "../components/Button";
import DraggablePoint from "../components/DraggablePoint";
import Slider from "../components/Slider";
import Toggle from "../components/Toggle";

export function ButtonPanel() {
  // function btnPress() {
  //   // todo

  //   console.log(`test`);
  // }
  return (
    <>
      <div className="card centered flex flex-col gap-5 area place-items-center flat">
        {/* <Button text="test button" onClick={btnPress} /> */}
        <Slider />
        <Toggle state={false} />
        {/* <Toggle state={true} /> */}
      </div>
    </>
  );
}

export function ButtonPanel2() {
  function btnPress() {
    // todo

    console.log(`test`);
  }
  return (
    <div className="card centered area flex flex-col place-items-center gap-5 flat">
      <Button text="test button" onClick={btnPress} />
      {/* <Toggle state={false} /> */}
      {/* <Toggle state={true} /> */}
      <DraggablePoint />
      {/* <DraggablePoint /> */}
    </div>
  );
}
