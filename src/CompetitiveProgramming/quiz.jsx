// Questions
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

export default function Quiz() {
  const PhoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const FirstNumber = PhoneNumber.slice(0, 3);

  const SecondNumber = PhoneNumber.slice(3, 7);

  const ThirdNumber = PhoneNumber.slice(7, 10);

  return (
    <div>
      "({FirstNumber}) {SecondNumber} -{ThirdNumber}"{" "}
    </div>
  );
}
