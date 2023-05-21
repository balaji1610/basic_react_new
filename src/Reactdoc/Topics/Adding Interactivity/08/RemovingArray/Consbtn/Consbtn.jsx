export default function Consbtn({ className, onClick, label }) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
