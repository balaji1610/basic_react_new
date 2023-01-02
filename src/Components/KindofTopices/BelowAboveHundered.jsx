import { useState } from "react";
export default function BelowAboveHundred() {
  const [array, setArray] = useState([]);
  const [afterArray, setAfterArray] = useState([]);

  const OnhandleEvent = (e) => {
    setArray(e.target.value);
  };

  const handleSubmit = () => {
    setAfterArray((prevState) => [array, ...prevState]);
  };

  const belowHundered = () => {
    return afterArray.filter((el) => el <= 100);
  };

  const aboveHundered = () => {
    return afterArray.filter((el) => el >= 100);
  };
  return (
    <div>
      <input type="text" placeholder="Enter Number" onChange={OnhandleEvent} />
      <button onClick={handleSubmit}>SUBMIT</button>
      {/* 
      <div>
        {afterArray.map((item) => {
          return <div>{item}</div>;
        })}
      </div> */}

      <div>
        <h1>Below Hundered</h1>

        {belowHundered().map((item) => {
          return <div>{item}</div>;
        })}
      </div>
      <hr />
      <div>
        <h1>Above Hundered</h1>
        {aboveHundered().map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
}
