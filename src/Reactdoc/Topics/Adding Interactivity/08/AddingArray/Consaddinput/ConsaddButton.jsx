export default function ConsaddButton({ className, onClick, label, type }) {
  return (
    <div>
      <button className={className} type={type} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
