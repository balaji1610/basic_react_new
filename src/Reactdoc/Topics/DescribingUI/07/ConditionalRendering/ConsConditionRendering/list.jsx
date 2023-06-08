export default function List({ ispakced, title }) {
  let itmeConnet;

  if (ispakced) {
    itmeConnet = <del> {title + " ✔"}</del>;
  } else {
    itmeConnet = title;
  }

  return (
    <div>
      <li>{itmeConnet}</li>
    </div>
  );
}
