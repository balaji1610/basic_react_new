import Button from "@mui/material/Button";

export default function ConButton({
  disabled,
  variant,
  label,
  sx,
  size,
  color,
  onClick,
  startIcon,
  endIcon,
}) {
  return (
    <>
      <Button
        disabled={disabled}
        variant={variant}
        size={size}
        sx={sx}
        color={color}
        onClick={onClick}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {label}
      </Button>
    </>
  );
}
