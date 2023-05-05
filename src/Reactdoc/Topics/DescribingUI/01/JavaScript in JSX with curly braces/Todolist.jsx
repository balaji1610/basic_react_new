export default function Todolist() {
  const Person = {
    name: "Gregorio Y. Zara",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };

  return (
    <div style={Person.theme}>
      <h1>{Person.name}</h1>

      <img
        className="avater"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Image"
      />
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </div>
  );
}
