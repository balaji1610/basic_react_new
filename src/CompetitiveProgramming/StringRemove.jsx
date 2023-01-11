import { useState } from "react";
export default function StringRemove() {
  const [textarea, setTextarea] = useState("");
  const [inputField, setInputField] = useState("");

  const onChangeEvents = {
    Handleevent: (e) => {
      setTextarea(e.target.value);
    },

    InputEvent: (e) => {
      setInputField(e.target.value);
    },
  };
  const { Handleevent, InputEvent } = onChangeEvents;

  const HandleClick = () => {
    const data = textarea.replaceAll(inputField, " ");

    setTextarea(data);
  };

  return (
    <div className="App">
      <section>
        <textarea
          rows="4"
          cols="50"
          placeholder="Pls enter"
          onChange={Handleevent}
        ></textarea>

        {textarea}
      </section>
      <br />
      <br />
      <section>
        <h1>Admin</h1>

        <input
          type="text"
          placeholder="Enter Your Text"
          onChange={InputEvent}
        />
        <button onClick={HandleClick}>SUBMIT</button>
      </section>
    </div>
  );
}
