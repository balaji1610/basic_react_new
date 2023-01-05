import { useState } from "react";
export default function Switch() {
  const [content, setcontent] = useState();

  const ButtonClick = (elm) => {
    switch (elm) {
      case "Balaji":
        setcontent("Balaji");
        break;

      case "ALEx":
        setcontent("ALEx");
        break;
      default:
        console.log("Default");
    }
  };

  return (
    <div className="App">
      <button onClick={(e) => ButtonClick("Balaji")}>Balaji</button>
      <br /> <br />
      <button onClick={(e) => ButtonClick("ALEx")}>ALEx</button>
      <h1> {content}</h1>
    </div>
  );
}
