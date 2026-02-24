export default function Toggle({ state, value, className }) {
  return (
    <>
      <input
        type="checkbox"
        value={value}
        defaultChecked={state}
        switch={1}
        className={`toggle flat m-4 ${className}`}
      ></input>
    </>
  );
}
