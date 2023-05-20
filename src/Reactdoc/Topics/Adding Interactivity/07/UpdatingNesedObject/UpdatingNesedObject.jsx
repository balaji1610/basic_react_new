import { useState } from "react";
import InputComponent from "./Consinputfield/Consinputfield";
export default function UpdatingNesedObject() {
  const [jobdetails, setJobDetails] = useState({
    name: " ",
    descp: {
      role: " ",
      programming: " ",
      imageurl: " ",
    },
  });

  const { name } = jobdetails;
  const { role, programming, imageurl } = jobdetails.descp;

  const handleChangeName = (e) => {
    setJobDetails({
      ...jobdetails,
      [e.target.name]: [e.target.value],
    });
  };
  const handlejobdetailsdescp = (e) => {
    setJobDetails({
      ...jobdetails,
      descp: {
        ...jobdetails.descp,
        [e.target.name]: [e.target.value],
      },
    });
  };
  return (
    <div>
      <div>
        <label>
          name:
          <InputComponent
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label>
          role:
          <InputComponent
            type="text"
            name="role"
            placeholder="role"
            value={role}
            onChange={handlejobdetailsdescp}
          />
        </label>
        <label>
          programming:
          <InputComponent
            type="text"
            name="programming"
            placeholder="programming"
            value={programming}
            onChange={handlejobdetailsdescp}
          />
        </label>
        <label>
          imageurl:
          <InputComponent
            type="text"
            name="imageurl"
            placeholder="imageurl"
            value={imageurl}
            onChange={handlejobdetailsdescp}
          />
        </label>
      </div>
      <p>
        {name}
        {role}
        {programming}

        <img className="avatar" src={imageurl} alt={programming} />
      </p>
    </div>
  );
}
