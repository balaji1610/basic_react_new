import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import Zoom from "@mui/material/Zoom";
import { Slide } from "@mui/material";
export default function Tooltips() {
  const longText =
    "Aliquam eget finibus ante, non facilisis lectus. Sed vitae ";
  return (
    <div>
      {" "}
      <Tooltip
        title="TOOL TIP"
        arrow
        placement="right"
        TransitionComponent={Zoom}
      >
        <p style={{ cursor: "pointer", display: "inline" }}>TOOL TIP</p>
      </Tooltip>
      <div>
        <Tooltip
          title={longText}
          arrow
          placement="right"
          TransitionComponent={Zoom}
        >
          <p style={{ cursor: "pointer", display: "inline" }}>Long Text</p>
        </Tooltip>
      </div>
    </div>
  );
}
