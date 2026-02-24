export default function Button({ text, bool, className }) {
  return (
    <>
      <button className={`min-w-5 min-h-5 convex h-fit mx-2 ${className}`}>
        {text}
      </button>
    </>
  );
}
