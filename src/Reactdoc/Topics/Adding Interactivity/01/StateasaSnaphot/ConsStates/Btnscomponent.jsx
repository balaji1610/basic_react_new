export default function Btnscomponent({ className, type, onClick, label }) {
  return (
    <div>
      <button className={className} type={type} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
