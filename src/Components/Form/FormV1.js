//https://www.geeksforgeeks.org/how-to-use-handlechange-function-in-react-component/?ref=gcse

import React, { useState } from "react";

function FormV1() {
  let [Name, setname] = useState("");
  const [show, setShow] = useState(true);

  /* The handleChange() function to set a new state for input */
  const handleChange = (event) => {
    setname(event.target.value);
  };
  function changeText(id) {
    id.innerHTML = "<h1>Hello</h1>";
  }

  return (
    <div>
      {/* <form> */}
      {/* The handleChange() is triggered when text is entered */}
      <div>
        {/* <h1>
            My Name is <span style={{ color: "red" }}>{Name}</span>
          </h1> */}

        {/* <div> </div>
          <h2 onclick="changeText(this)">Click on this text!</h2> */}

        {/* <div class="button">
            {" "}
            <a>
              <img src="https://img.icons8.com/material/24/undefined/plus-2-math--v1.png" />
            </a>
          </div> */}

        {/* <a class="">
            {" "}
            <img src="https://img.icons8.com/material/24/undefined/plus-2-math--v1.png" />
          </a> */}
      </div>
      {/* </form> */}

      <div>
        <button onClick={() => setShow((s) => !s)}>
          {" "}
          <img src="https://img.icons8.com/material/24/undefined/plus-2-math--v1.png" />
        </button>
        <div style={{ display: show ? "none" : "block" }}>
          {" "}
          <input
            type="text"
            value={Name}
            onChange={handleChange}
            placeholder="Enter a text"
            class="input"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            value={Name}
            onChange={handleChange}
            placeholder="Enter a text"
            class="input"
          />
        </div>
      </div>
    </div>
  );
}

export default FormV1;
