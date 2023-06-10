import IconButton from "@mui/material/IconButton";

export default function ConIconButton({
  children,

  edge,
  color,
  onClick,
}) {
  return (
    <>
      <IconButton edge={edge} color={color} onClick={onClick}>
        {children}
      </IconButton>
    </>
  );
}
