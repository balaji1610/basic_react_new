//https://www.geeksforgeeks.org/how-to-use-handlechange-function-in-react-component/?ref=gcse

import React, { useState } from "react";

function FormV1() {
  let [Name, setname] = useState("");

  /* The handleChange() function to set a new state for input */
  const handleChange = (event) => {
    setname(event.target.value);
  };
  return (
    <div>
      <form>
        {/* The handleChange() is triggered when text is entered */}
        <div>
          <h1>
            My Name is <span style={{ color: "red" }}>{Name}</span>
          </h1>
          <input
            type="text"
            value={Name}
            onChange={handleChange}
            placeholder="Enter a text"
          />
        </div>
      </form>
    </div>
  );
}

export default FormV1;
