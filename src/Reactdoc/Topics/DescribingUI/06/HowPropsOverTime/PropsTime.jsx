import { useState, useEffect } from "react";
import Clock from "./ConsPropsTime/Clock";
export default function PropsTime() {
  const [color, setColor] = useState("red");

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
      Pick a color--
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
      </select>
      <Clock color={color} time={UseTime()} />
    </div>
  );
}
