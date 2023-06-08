import { useState } from "react";
import Consaddinput from "./Consaddinput/Consaddinput";
import ConsaddButton from "./Consaddinput/ConsaddButton";
export default function AddingArray() {
  let id = 0;
  const [name, setName] = useState(" ");

  const [nameDetails, setnameDetails] = useState([]);
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const submitData = (e) => {
    e.preventDefault();
    setnameDetails([{ id: id++, name: name }, ...nameDetails]);
    setName(" ");
  };

  return (
    <div>
      <form onSubmit={submitData}>
        <Consaddinput
          type="text"
          placeholder="Name"
          onChange={handleChangeName}
        />
        <br />
        <ConsaddButton type="submit" label="Add" />
      </form>
      <ul>
        {nameDetails.map((nameDetails) => {
          const { id, name } = nameDetails;
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
}
