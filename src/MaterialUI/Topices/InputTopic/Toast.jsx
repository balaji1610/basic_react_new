import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";

export default function Toast() {
  const [toast, setToast] = useState(false);

  const handleToastOpenclick = () => {
    setToast(true);
  };

  const handleToastClose = () => {
    setToast(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleToastOpenclick}>
        Toast
      </Button>

      <Snackbar
        open={toast}
        autoHideDuration={3000}
        onClose={handleToastClose}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
      >
        <Alert
          onClose={handleToastClose}
          severity="success"
          variant="filled"
          icon={<PlaylistAddCheckCircleIcon />}
          style={{
            background:
              "linear-gradient(90deg, hsla(61, 91%, 54%, 1) 0%, hsla(95, 98%, 41%, 1) 100%)",
            color: "black",
            fontSize: "17px",
          }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}
