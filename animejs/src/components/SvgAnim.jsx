export default function SvgAnim() {
  return (
    <svg
      className="self-center"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="50%"
        y1="5"
        x2="50%"
        y2="230"
        stroke="var(--accent)"
        strokeLinecap="round"
        strokeWidth="10"
      />
    </svg>
  );
}
