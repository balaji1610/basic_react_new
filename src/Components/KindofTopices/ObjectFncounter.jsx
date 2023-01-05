import { useState } from "react";

export default function ObjectFncounter() {
  const [Count, setCount] = useState(0);
  const [buttonDisable, setButtonDisable] = useState({
    InceraseButtonDisable: false,
    DeceraseButtonDisable: false,
  });

  const { InceraseButtonDisable, DeceraseButtonDisable } = buttonDisable;
  const HandleButtons = {
    Incerase: function () {
      const ErrorIncerase = () =>
        Count <= 10
          ? setCount(Count + 1)
          : setButtonDisable({ ...buttonDisable, InceraseButtonDisable: true });
      return ErrorIncerase();
    },

    Decerase: function () {
      const ErrorDecerase = () =>
        Count <= 11
          ? setCount(Count - 1)
          : setButtonDisable({ ...buttonDisable, DeceraseButtonDisable: true });

      return ErrorDecerase();
    },
  };

  const { Incerase, Decerase } = HandleButtons;
  return (
    <div className="App">
      <button
        disabled={InceraseButtonDisable ? true : false}
        onClick={Incerase}
        class="btn btn-primary"
      >
        +
      </button>
      <br /> <br />
      {Count}
      <br /> <br />
      <button
        disabled={DeceraseButtonDisable ? true : false}
        onClick={Decerase}
        class="btn btn-primary"
      >
        -
      </button>
    </div>
  );
}
