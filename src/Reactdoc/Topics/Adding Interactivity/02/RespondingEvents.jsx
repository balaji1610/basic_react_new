import ButtonEvents from "./ConsResponding/ButtonEvents";

export default function RespondingEvents() {
  const handleChangeColor = () => {
    let bodystyle = document.body.style;

    return bodystyle.backgroundColor === "black"
      ? ((bodystyle.backgroundColor = "white"), (bodystyle.color = "#000000"))
      : ((bodystyle.color = "red"), (bodystyle.backgroundColor = "black"));
  };
  return (
    <div>
      <ButtonEvents onClick={handleChangeColor} label={"ChangeBG"} />
    </div>
  );
}
