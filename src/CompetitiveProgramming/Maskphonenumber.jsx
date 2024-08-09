import { useState } from "react";

export default function Maskphonenumber() {
  const [getNumber, setGetNumber] = useState("");
  const [result, setresult] = useState("");

  const [error, setError] = useState({
    Notnumber: false,
    Maximumnumber: false,
    button: false,
  });

  const handlechange = (e) => {
    setGetNumber(e.target.value);
    setError({
      ...error,
      Notnumber: false,
      Maximumnumber: false,
      button: false,
    });

    if (isNaN(getNumber)) {
      setError({ ...error, Notnumber: true, button: true });
      console.log("Not A Number");
    } else {
      if (getNumber.length ===10) {
        setError({ ...error, Maximumnumber: true, button: true });
        console.log("It is a Number");
      }
    }
  };

  const Masknumber = () => {
    const firstData = getNumber.slice(-5);

    const maskresult = firstData.padStart(getNumber.length, "#");

    return setresult(maskresult);
  };

  //   console.log(error.Notnumber, "<---");
  return (
    <div>
      <input
        type="text"
        onChange={handlechange}
        value={getNumber}
        placeholder="MobileNumber"
        maxlength="10"
      />
      <button onClick={error.button ? null : Masknumber}>
        <span className={error.button ? "Notallowed" : null}>Submit</span>
      </button>

      <p>{result}</p>
      <p>
        {error.Notnumber ? (
          <p className="Error_msg">Please Enter Numbr</p>
        ) : null}
      </p>
      <p>
        {error.Maximumnumber ? (
          <p className="Error_msg">Please Enter 10 digit Number</p>
        ) : null}
      </p>
    </div>
  );
}
