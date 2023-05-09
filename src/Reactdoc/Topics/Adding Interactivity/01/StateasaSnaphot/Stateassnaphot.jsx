import { useState } from "react";
import DropdownComp from "./ConsStates/DropdownComp";
import Btnscomponent from "./ConsStates/Btnscomponent";
export default function Stateassnapshot() {
  const [to, setTo] = useState();
  const [message, setMessage] = useState("write a message ");
  const options = [
    { value: "balaji", label: "BALAJI" },
    { value: "Alex", label: "ALEX" },
  ];

  const handleChange = (e) => {
    return setTo(e.target.value);
  };

  const handleChangeText = (e) => {
    return setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${message} to ${to}`);
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <lable>
          To:{" "}
          <DropdownComp value={to} onChange={handleChange} options={options} />
        </lable>
        <br /> <br />
        <textarea
          placeholder="message"
          value={message}
          onChange={handleChangeText}
        />
        <Btnscomponent className={"btn_red"} type={"submit"} label={"Submit"} />
      </form>
    </div>
  );
}
