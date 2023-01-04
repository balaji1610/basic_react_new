import { useState } from "react";

export default function NestedObjects() {
  const [nestedObject, setNestedObject] = useState({
    PersonalDetails: {
      Name: " ",
      FatherName: " ",
    },
    ProfessionalDetails: {
      Role: " ",
      Skills: ["HTML", "CSS", "JS"],
    },
  });

  const [finalArray, setFinalArray] = useState([]);
  const handleChange = (e) => {
    if (Object.keys(nestedObject.PersonalDetails).includes(e.target.name)) {
      setNestedObject((prevState) => ({
        ...prevState,
        PersonalDetails: {
          ...nestedObject.PersonalDetails,
          [e.target.name]: e.target.value,
        },
      }));
    } else if (e.target.name === "Skills") {
      setNestedObject((prevState) => ({
        ...prevState,
        ProfessionalDetails: {
          ...nestedObject.ProfessionalDetails,
          [e.target.name]: [e.target.value],
        },
      }));
    } else {
      setNestedObject((prevState) => ({
        ...prevState,
        ProfessionalDetails: {
          ...nestedObject.ProfessionalDetails,
          [e.target.name]: e.target.value,
        },
      }));
    }
  };

  const EventClick = () => {
    setFinalArray([...finalArray, nestedObject]);
  };
  // const {
  //   PersonalDetails: { Name, FatherName }
  // } = nestedObject;

  // console.log(nestedObject);
  // console.log(finalArray, "finalArray");

  return (
    <div className="App">
      <div>
        {" "}
        <p>Name</p>
        <input
          type="text"
          name="Name"
          placeholder="NAME"
          onChange={(e) => handleChange(e)}
        />
        <p>FatherName</p>
        <input
          type="text"
          name="FatherName"
          placeholder="FatherName"
          onChange={(e) => handleChange(e)}
        />
        <p>Role</p>
        <input
          type="text"
          name="Role"
          placeholder="Role"
          onChange={(e) => handleChange(e)}
        />
        <p>Skills</p>
        <input
          type="text"
          name="Skills"
          placeholder="Skills"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={EventClick}>Submit</button>
      </div>

      <div>
        {finalArray.map((item) => {
          const {
            PersonalDetails: { Name, FatherName },
          } = item;

          const {
            ProfessionalDetails: { Role, Skills },
          } = item;
          return (
            <div>
              NAME: {Name},FatherName:{FatherName} ROLE:{Role} Skills:{Skills}
            </div>
          );
        })}
      </div>
    </div>
  );
}
