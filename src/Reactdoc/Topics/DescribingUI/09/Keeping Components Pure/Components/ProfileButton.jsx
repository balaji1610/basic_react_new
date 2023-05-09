export default function ProfileButton({ onClick, children }) {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
