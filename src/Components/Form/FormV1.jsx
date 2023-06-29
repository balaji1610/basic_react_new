//https://www.geeksforgeeks.org/how-to-use-handlechange-function-in-react-component/?ref=gcse

import { useState } from "react";
function FormV1() {
  let [Name, setname] = useState("");
  const [show, setShow] = useState(true);

  /* The handleChange() function to set a new state for input */
  const handleChangedd = (event) => {
    setname(event.target.value);
  };
  function changeText(id) {
    id.innerHTML = "<h1>Hello</h1>";
  }
  const [dataArray, setDataArray] = useState([
    {
      inputvalue: "",
      produvalue: "",
    },
  ]);
  console.log(dataArray, "dataArray");

  const handleChange = (e, getindex) => {
    const { name, value } = e.target;

    const up = dataArray.map((elm, index) => {
      return index === getindex ? { ...elm, [name]: value } : elm;
    });
    setDataArray(up);
  };
  const handleAddItem = () => {
    setDataArray([...dataArray, { inputvalue: " " }]);
  };

  const handleRemoveClick = (removeindex) => {
    const RemoveItem = dataArray.filter((elm, index) => {
      return index !== removeindex;
    });
    setDataArray(RemoveItem);
  };
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
            onChange={handleChangedd}
            placeholder="Enter a text"
            class="input"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            value={Name}
            onChange={handleChangedd}
            placeholder="Enter a text"
            class="input"
          />
        </div>
      </div>
      <h1>Add LIST ITEM</h1>
      <div>
        {dataArray.map((el, index) => {
          const { inputvalue, produvalue } = el;
          return (
            <div>
              <input
                type="text"
                value={inputvalue}
                name="inputvalue"
                onChange={(e) => handleChange(e, index)}
              />
              &nbsp;&nbsp;&nbsp;
              <input
                type="text"
                value={produvalue}
                name="produvalue"
                onChange={(e) => handleChange(e, index)}
              />
              <div>
                <button onClick={() => handleRemoveClick(index)}>Remove</button>
              </div>
            </div>
          );
        })}

        <button onClick={handleAddItem}>Add ITem</button>
      </div>
    </div>
  );
}

export default FormV1;
