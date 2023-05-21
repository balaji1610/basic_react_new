import { useState } from "react";
import Consbtn from "./Consbtn/Consbtn";
export default function RemovingArray() {
  const [location, setLocation] = useState([
    {
      id: 0,
      city: "triunelveli",
    },
    {
      id: 1,
      city: "kalakad",
    },
    {
      id: 2,
      city: "Thirukungudi",
    },
  ]);

  const handleDeleteEvent = (el) => {
    const update = location.filter((elm) => elm.id !== el);

    setLocation(update);
  };
  return (
    <div>
      <ul>
        {location.map((location) => {
          const { id, city } = location;
          return (
            <li key={id}>
              {city}
              <Consbtn
                label="DELETE"
                onClick={() => {
                  handleDeleteEvent(id);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
