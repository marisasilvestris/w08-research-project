export default function SvgAnim() {
  return (
    <>
      <h2>svg animation</h2>
      <svg
        className="self-center p-5"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="50%"
          y1="5"
          x2="50%"
          y2="33%"
          stroke="var(--accent)"
          strokeWidth="10"
        />
        <line
          x1="50%"
          y1="33%"
          x2="50%"
          y2="66%"
          stroke="var(--accent)"
          strokeWidth="10"
        />
        <line
          name="test"
          x1="50%"
          y1="66%"
          x2="50%"
          y2="95%"
          stroke="var(--accent)"
          strokeWidth="10"
        />
      </svg>
    </>
  );
}
