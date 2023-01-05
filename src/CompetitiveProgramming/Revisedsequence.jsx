import { useState } from "react";
export default function Revisedsequence() {
  const [inputData, setInputData] = useState("");

  const [reverseArray, setReverseArray] = useState([]);

  const [forwardArray, setForwardArray] = useState([]);

  const submitClick = () => {
    // setAfterSubmit(Number(inputData));

    const Content = Number(inputData);

    const reverseFn = () => {
      let Emptyreverse = [];

      for (let i = Content; i > 0; i--) {
        Emptyreverse.push(i);
      }

      return Emptyreverse;
    };

    const ForwardFn = () => {
      let Emptyforward = [];
      for (let x = 1; Content >= x; x++) {
        Emptyforward.push(x);
      }

      return Emptyforward;
    };

    setReverseArray(reverseFn());
    setForwardArray(ForwardFn());
  };

  const handleEvent = (e) => {
    setInputData(e.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        name="Numbers"
        onChange={handleEvent}
        placeholder="Type of number"
      />

      <button onClick={submitClick}>Submit</button>

      <section>
        <h1>Reverse Array</h1>
        {reverseArray.map((item) => {
          return <span>{item}&nbsp;</span>;
        })}
      </section>
      <section>
        <h1>Forward Array</h1>
        {forwardArray.map((item) => {
          return <span>{item}&nbsp;</span>;
        })}
      </section>
    </div>
  );
}
