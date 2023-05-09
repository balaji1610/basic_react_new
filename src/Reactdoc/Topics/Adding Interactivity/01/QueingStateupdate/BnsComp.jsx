export default function BnsComp({ className, onClick, lable }) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {lable}
      </button>
    </div>
  );
}
