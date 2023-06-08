export default function ConsConditional({ isPacked, name }) {
  return (
    <div>
      <li>
        {name} {isPacked && "✔"}
      </li>
    </div>
  );
}
