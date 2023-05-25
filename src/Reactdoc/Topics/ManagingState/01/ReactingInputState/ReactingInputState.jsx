import { useState } from "react";
export default function ReactingInputState() {
  const [name, setName] = useState("");

  const [error, setError] = useState("");
  const [correctMessage, setCorrectMessage] = useState("");
  const handleTextchange = (e) => {
    setName(e.target.value);
    setError(false);
    setCorrectMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    name === "balaji" ? setCorrectMessage(true) : setError(true);
    setName("");
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <textarea value={name} onChange={handleTextchange} />
        <button disabled={name.length > 0 ? false : true}>Submit</button>
        {error && <p style={{ color: "red" }}>Worng Answer</p>}

        {correctMessage && <p style={{ color: "blue" }}>This is My name</p>}
      </form>
    </div>
  );
}
