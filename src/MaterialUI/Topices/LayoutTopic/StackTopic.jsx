import { Stack } from "@mui/material";
import { Button } from "@mui/base";
export default function StackTopic() {
  return (
    <div>
   
      <h5>
        Stack is concerned with one-dimensional layouts, while Grid handles
        two-dimensional layouts. The default direction is column which stacks
        children vertically.
      </h5>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <div><Button>1</Button></div>
        <div><Button>2</Button></div>
        <div><Button>3</Button></div>
      </Stack>
      <div className="divder"></div>
    </div>
  );
}
