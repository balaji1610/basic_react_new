export default function ReverseString() {
  const reverseString = (el) => {
    return el.split("").reverse().join(" ");
  };
  const reverseNumber = (el) => {
    return String(el).split("").reverse().join(" ");
  };
  return (
    <div>
      {reverseString("HelloBalaji")}
      <br />
      {reverseNumber(123456789)}
    </div>
  );
}
