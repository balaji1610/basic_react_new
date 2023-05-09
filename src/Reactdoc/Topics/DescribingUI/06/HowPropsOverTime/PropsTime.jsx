import { useState, useEffect } from "react";
import Clock from "./ConsPropsTime/Clock";
import Dropdown from "./ConsPropsTime/Dropdown";
export default function PropsTime() {
  const [color, setColor] = useState("red");

  const [socialMedia, setSocialMedia] = useState("Facebook");

  const options = [
    {
      value: "facebook",
      label: "Facebook",
      color: "#1877F2",
      fontfamily: "Open Sans",
    },
    {
      value: "twiter",
      label: "Twiter",
      color: "#1DA1F2",
      fontfamily: "cursive",
    },

    {
      value: "instagram",
      label: "Instagram",
      color: "#E1306C",
      fontfamily: "Georgia, serif",
    },
    {
      value: "whatsapp",
      label: "Whatsapp",
      color: "#25D366",
      fontfamily: " sans-serif;",
    },
  ];

  function Changecolor() {
    return options
      .filter((x) => x.value === socialMedia)
      .map((y) => y.color)
      .join("");
  }

  function ChangeFontstyle() {
    return options
      .filter((x) => x.value === socialMedia)
      .map((y) => y.fontfamily)
      .join("");
  }

  useEffect(() => {
    Changecolor();
    ChangeFontstyle();
  }, []);

  function UseTime() {
    const [time, setTime] = useState(() => new Date());

    useEffect(() => {
      const id = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(id);
    }, []);

    return time.toLocaleTimeString();
  }

  return (
    <div>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
      </select>
      <Clock color={color} time={UseTime()} />
      <hr />
      <h1>Component Component</h1>
      <h1 style={{ color: Changecolor(), fontFamily: ChangeFontstyle() }}>
        {socialMedia}
      </h1>
      <Dropdown
        value={socialMedia}
        onChange={(e) => setSocialMedia(e.target.value)}
        options={options}
      />
    </div>
  );
}
