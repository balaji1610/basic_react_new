import { useState } from "react";

import ConDropdown from "./Components/ConDropdown";
export default function DropdownMUI() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const options = [
    {
      value: "React",
      label: "React",
    },
    {
      value: "Javascript",
      label: "Javascript",
    },
    {
      value: "Redux",
      label: "Redux",
    },
    {
      value: "API",
      label: "API",
    },
  ];

  return (
    <div>
      <p>DROPDOWN</p>

      <div>
        <ConDropdown
          style={{ width: "320px", height: "70px", fontSize: "20px" ,
          color: "#FF5252"}}
          value={age}
          onChange={handleChange}
          options={options}
          optionsStyle={{
            fontSize: "20px",
            color: "#212121",
          }}
        />

        {age}
      </div>
    </div>
  );
}
