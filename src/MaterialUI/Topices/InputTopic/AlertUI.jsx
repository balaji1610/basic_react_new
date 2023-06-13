import Alert from "@mui/material/Alert";
import AddTaskIcon from "@mui/icons-material/AddTask";

export default function AlertUI() {
  return (
    <div>
      <Alert
        variant="filled"
        severity="warning"
        icon={<AddTaskIcon />}
        style={{
          backgroundImage: "linear-gradient(to top, #36d1dc, #5b86e5)"}}
      >
        This is an error alert — check it out!
      </Alert>
    </div>
  );
}
