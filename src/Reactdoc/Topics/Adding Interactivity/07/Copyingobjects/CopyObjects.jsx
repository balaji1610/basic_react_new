import { useState } from "react";
import InputComp from "./Consinput/inputComp";
export default function CopyObjects() {
  const [person, setPerson] = useState({
    firstName: "Balaji",
    lastName: "M",
    city: "tirunelveli",
  });

  const { firstName, lastName, city } = person;
  const onChangeFirstName = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };
  const onChangeLastName = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  const onChangeCityName = (e) => {
    setPerson({ ...person, city: e.target.value });
  };

  return (
    <div>
      <>
        {" "}
        <label>
          FirstName:{" "}
          <InputComp
            type="text"
            placeholder="firstName"
            onChange={onChangeFirstName}
            value={firstName}
          />
        </label>
        <br />
        <label>
          LastName:{" "}
          <InputComp
            type="text"
            placeholder="lastName"
            onChange={onChangeLastName}
            value={lastName}
          />
        </label>
        <br />
        <label>
          City:{" "}
          <InputComp
            type="text"
            placeholder="city"
            onChange={onChangeCityName}
            value={city}
          />
        </label>
      </>

      <>
        <p>
          {firstName} {lastName},<span> He is from {city}</span>
        </p>
      </>
    </div>
  );
}
