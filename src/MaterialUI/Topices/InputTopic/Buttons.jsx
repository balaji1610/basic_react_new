import ConButton from "./Components/ConButton";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DataSaverOnOutlinedIcon from "@mui/icons-material/DataSaverOnOutlined";

import IconButton from "@mui/material/IconButton";
import ConIconButton from "./Components/ConIconButton";
export default function Buttons() {
  const clickEvent = () => {
    alert("balaji");
  };

  const IconClick = () => {
    alert("ICON");
  };
  return (
    <div>
      <ConButton
        variant="contained"
        label="Hello"
        sx={{ border: "2px dotted red" }}
        size="large"
        color="primary"
        onClick={clickEvent}
        startIcon={<AddCircleRoundedIcon />}
        endIcon={<DataSaverOnOutlinedIcon />}
      />
      <h1>Icon Button</h1>
      <div>
        <ConIconButton
          children={<DataSaverOnOutlinedIcon fontSize="large" />}
          edge="start"
          color="primary"
          onClick={IconClick}
        />
      </div>
    </div>
  );
}
