import ConButton from "./Components/ConButton";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DataSaverOnOutlinedIcon from "@mui/icons-material/DataSaverOnOutlined";
import { useState } from "react";

import ConIconButton from "./Components/ConIconButton";
import InputField from "./InputField";
export default function Buttons() {
  const [hoverd, setHoverd] = useState(false);
  const clickEvent = () => {
    alert("balaji");
  };

  const IconClick = () => {
    alert("ICON");
  };

  const Mouseenter = () => {
    setHoverd(true);
  };
  const Mouseleave = () => {
    setHoverd(false);
  };
  return (
    <div>
      <ConButton
        variant="contained"
        label="Hello"
        size="large"
        // color="primary"
        onClick={clickEvent}
        startIcon={<AddCircleRoundedIcon />}
        endIcon={<DataSaverOnOutlinedIcon />}
        style={{
          backgroundColor: hoverd ? "red" : "#21b6ae",
        }}
        onMouseEnter={Mouseenter}
        onMouseLeave={Mouseleave}
      />
      <div></div>
      <h1>Icon Button</h1>
      <div>
        <ConIconButton
          children={<DataSaverOnOutlinedIcon fontSize="large" />}
          edge="start"
          color="primary"
          onClick={IconClick}
        />
      </div>

      <div>
        <h1>Text Field</h1>
        <InputField />
      </div>
    </div>
  );
}
