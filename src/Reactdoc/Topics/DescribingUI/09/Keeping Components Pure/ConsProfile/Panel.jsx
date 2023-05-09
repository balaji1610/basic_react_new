import { useState } from "react";
import ProfileButton from "../Components/ProfileButton";
export default function Panel({ children }) {
  const [open, setOpen] = useState(true);

  const handleButtonClick = () => {
    setOpen(!open);
  };

  return (
    <div className="panel">
      <ProfileButton
        onClick={handleButtonClick}
        children={open ? "Collapse" : "Expand"}
      />
      {open && children}
    </div>
  );
}
