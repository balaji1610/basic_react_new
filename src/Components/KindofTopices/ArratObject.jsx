import { useState } from "react";

export default function ArrayObject() {
  //Array
  const [arrayData, setArrayData] = useState([]);
  const [clickarrayData, setClickData] = useState([]);

  //Object
  const [objectArray, setObjectData] = useState([]);

  //Array Events

  const handleEvent = (e) => {
    // setArrayData((arrayData) => [...arrayData, e.target.value]);
    setArrayData(e.target.value);
  };

  const ButtonClick = () => {
    // setArrayData(...arrayData)
    setClickData((clickarrayData) => [arrayData, ...clickarrayData]);
  };

  //Object Events

  const [objectData, setObject] = useState({
    Name: " ",
    Role: " ",
  });

  const objectHanleEvent = (e) => {
    setObject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const ObjectSubmit = () => {
    setObjectData((objectArray) => [...objectArray, objectData]);
  };

  // console.log(arrayData, "arrayData");

  console.log(objectArray, "Objectarray");

  // console.log(clickarrayData, "clickarrayData");
  return (
    <div className="App">
      <input
        type="text"
        name="arrayData"
        placeholder="Enter Your Number"
        onChange={handleEvent}
      />
      <button onClick={ButtonClick}>SUBMIT</button>
      <hr />
      <div>
        <p>Name</p>
        <input
          type="text"
          name="Name"
          placeholder="FirstName"
          value={objectData.Name}
          onChange={(e) => objectHanleEvent(e)}
        />
        <p>Role</p>
        <input
          type="text"
          name="Role"
          value={objectData.Role}
          placeholder="Role"
          onChange={(e) => objectHanleEvent(e)}
        />
        <br />
        <button onClick={ObjectSubmit}>OBJ SUBMIT</button>
      </div>

      <div>
        <h1>Array</h1>
        {clickarrayData.map((item) => {
          console.log(item, "ttt");
          return <div>{item}</div>;
        })}
      </div>
      <hr />

      <div>
        <h1>Object</h1>

        {objectArray.map((item) => {
          const { Name, Role } = item;
          return (
            <div>
              Name:{Name} && Role:{Role}
            </div>
          );
        })}
      </div>
    </div>
  );
}
