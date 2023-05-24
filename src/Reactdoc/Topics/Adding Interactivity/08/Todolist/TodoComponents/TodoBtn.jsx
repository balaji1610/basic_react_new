export default function TodoBtn({ className, onClick, label }) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
