import ConButton from "./Components/ConButton";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
export default function Buttons() {
  const clickEvent = () => {
    alert("balaji");
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
    </div>
  );
}
