export default function Avater({ Data, className, src, alt }) {
  return (
    <>
      <h1>{Data}</h1>

      <img className={className} src={src} alt={alt} />
    </>
  );
}
