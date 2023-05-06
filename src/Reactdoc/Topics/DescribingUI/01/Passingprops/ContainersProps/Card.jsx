export default function Card({ children }) {
  return (
    <div style={{ border: "10px solid red" }}>
      <div>{children}</div>
    </div>
  );
}
