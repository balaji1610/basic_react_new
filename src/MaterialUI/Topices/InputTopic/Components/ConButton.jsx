import Button from "@mui/material/Button";

export default function ConButton({
  disabled,
  variant,
  label,
  style,
  size,
  color,
  onClick,
  startIcon,
  endIcon,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <>
      <Button
        disabled={disabled}
        variant={variant}
        size={size}
        style={style}
        color={color}
        onClick={onClick}
        startIcon={startIcon}
        endIcon={endIcon}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {label}
      </Button>
    </>
  );
}
