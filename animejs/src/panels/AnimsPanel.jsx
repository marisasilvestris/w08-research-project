import { Anims1 } from "../components/Anims1";
import { Anims2 } from "../components/Anims2";

export function AnimsPanel1({ className }) {
  return (
    <>
      <div className="card centered area flat">
        <Anims1 />
      </div>
    </>
  );
}
export function AnimsPanel2({ className }) {
  return (
    <>
      <div className="card centered area flat">
        <Anims2 />
      </div>
    </>
  );
}
