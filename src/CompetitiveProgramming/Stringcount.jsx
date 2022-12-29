// Questions

export default function Stringcount() {
  // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  const createPhoneNumber = (str) => {
    let obj = [];
    const str2 = str.toLowerCase();
    for (let char of str2) {
      if (obj[char]) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
    return obj;
  };
  //Object to map
  let array = Object.entries(createPhoneNumber("abcdaaaa"));

  return (
    <div>
      <section>
        {array.map((item) => {
          return item;
        })}
      </section>
    </div>
  );
}
