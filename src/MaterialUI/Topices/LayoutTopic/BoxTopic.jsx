import { Box } from "@mui/material";

export default function BoxTopic() {
  return (
    <div>
      <Box
        bgcolor="palevioletred"
        height="120px"
        textAlign="center"
        border="2px solid blue"
      >
        <h1>Hello Box</h1>
        <div>fff</div>
      </Box>
      <div className="divder"></div>
      <Box
        component="span"
        sx={{
          border: "1px solid red",
          color: "#ffc107",
          backgroundColor: "#6b7280",
          width: "65px",
          display: "inline-block",
          height: "39px",
        }}
      >
        BOX 2
      </Box>
    </div>
  );
}
