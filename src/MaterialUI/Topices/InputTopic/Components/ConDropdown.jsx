import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";

export default function ConDropdown({
  style,
  value,
  onChange,
  options,
  optionsStyle,
}) {
  return (
    <div>
      <Select style={style} value={value} onChange={onChange} defaultValue="dd">
        {options.map((elm) => {
          return (
            <MenuItem value={elm.value} style={optionsStyle}>
              {" "}
              {elm.label}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
}
