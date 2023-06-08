import { useState } from "react";
import ConsinputComp from "./ConsinputComp/ConsinputComp";
export default function UsingSigleEventHandler() {
  const [education, setEducation] = useState({
    stream: " ",
    degree: " ",
    university: " ",
  });

  const { stream, degree, university } = education;

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <label>
        stream:
        <ConsinputComp
          type="text"
          name="stream"
          placeholder="stream"
          value={stream}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        degree:
        <ConsinputComp
          type="text"
          name="degree"
          placeholder="degree"
          value={degree}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        university:
        <ConsinputComp
          type="text"
          name="university"
          placeholder="university"
          value={university}
          onChange={handleChange}
        />
      </label>

      <p>
        {" "}
        {stream} {degree} {university}
      </p>
    </div>
  );
}
