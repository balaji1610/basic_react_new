export default function Wordcount() {
  const checkworkcount = (el) => {
    const check = { facebook: "facebook" };
    const li = ["intstrage", "facebook", "twitter"];
    console.log(check["twitter"]);
    let obj = {};
    for (let list of el.split(" ")) {
      if (obj[list]) {
        obj[list]++;
      } else {
        obj[list] = 1;
      }
    }
    // console.log(obj, "obj");
    return obj;
  };

  let count = Object.entries(checkworkcount("Hello Balaji Hello Balaji Hello"));
  console.log(count, "coun");
  return (
    <div>
      {count.map((item) => {
        console.log(item, "ggg");
        return <p>{item}</p>;
      })}
    </div>
  );
}
