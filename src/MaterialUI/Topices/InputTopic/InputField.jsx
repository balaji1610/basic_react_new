import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
export default function InputField() {
  const [getName, setGetName] = useState("");

  const ChangeTextName = (e) => {
    setGetName(e.target.value);
  };
  return (
    <div>
      <TextField
        label="FIRST NAME"
        variant="outlined"
        placeholder="Write a Name"
        size="medium"
        color="success"
        // multiline
        // error
        helperText="Write A Capital Letter"
        rows="3"
        // required
        inputProps={{
          maxLength: "5",
          style: { fontSize: 20, color: "black" },
        }}
        InputProps={{
          startAdornment:
            getName.length == 0 ? (
              <InputAdornment position="start">
                <AccountCircleSharpIcon
                  fontSize="large"
                  style={{ color: "red" }}
                />
              </InputAdornment>
            ) : (
              <InputAdornment position="start">
                <AccountCircleSharpIcon
                  fontSize="large"
                  style={{ color: "blue" }}
                />
              </InputAdornment>
            ),
        }}
        InputLabelProps={{
          style: {
            fontSize: getName.length == 0 ? 20 : 22,
            color: getName.length == 0 ? "red" : "blue",
          },
        }} // font size of input label
        style={{
          width: "330px",
        }}
        onChange={ChangeTextName}
        value={getName}
        // type="file"
      />

      {getName}

      <>
        <Button variant="contained" component="label">
          Upload File
          <input type="file" hidden />
        </Button>
      </>

      {/* <div>
        <TextField
          id="input-with-icon-textfield"
          label="TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleSharpIcon />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ style: { fontSize: 20, color: "red" } }}
          variant="outlined"
        />
      </div> */}
    </div>
  );
}
