import { useState } from "react";
import Buttoncomponent from "./ConsStatememory/Buttoncomponent";
import { sculptureList } from "./ConsStatememory/sculptureList";

export default function StateMemory() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  const handleNextClick = () => {
    return hasNext ? setIndex(index + 1) : setIndex(0);
  };

  const handleShowHideClick = () => {
    return setShow(!show);
  };
  let nextSlide = sculptureList[index];
  return (
    <div>
      <Buttoncomponent
        label={"Next"}
        onClick={handleNextClick}
        className={"btn_blue"}
      />
      <h2>
        <i>{nextSlide.name}</i>by {nextSlide.artist}
      </h2>
      ({index + 1} of {sculptureList.length})
      <Buttoncomponent
        label={show ? "Hide" : "Show"}
        onClick={handleShowHideClick}
        className={"btn_red"}
      />
      {show && <p>{nextSlide.description}</p>}
      <img src={nextSlide.url} alt={nextSlide.alt} />
    </div>
  );
}
