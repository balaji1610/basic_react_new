import { useState } from "react";
import ConsaddButton from "../AddingArray/Consaddinput/ConsaddButton";
import Consaddinput from "../AddingArray/Consaddinput/Consaddinput";
export default function InsertingArray() {
  let nextId = 3;
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
  ]);

  const onChangeEvent = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0, insertAt),

      { id: nextId++, name: name },

      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName("");
  };

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <Consaddinput
        type="text"
        placeholder="h"
        value={name}
        onChange={onChangeEvent}
      />
      <ConsaddButton label="Insert" onClick={handleClick} />
      <ul>
        {artists.map((el) => {
          const { id, name } = el;
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </>
  );
}
