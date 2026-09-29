export default function Arrows({ index, count, setIndex }) {
  return (
    <div className="arrows">
      <button
        className="circle"
        aria-label="Previous"
        disabled={index === 0}
        onClick={() => setIndex(index - 1)}
      >
        ←
      </button>
      <button
        className="circle"
        aria-label="Next"
        disabled={index === count - 1}
        onClick={() => setIndex(index + 1)}
      >
        →
      </button>
    </div>
  )
}
