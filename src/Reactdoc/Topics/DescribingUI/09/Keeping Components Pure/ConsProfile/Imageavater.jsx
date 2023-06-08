export default function ImageAvater({ person }) {
  return (
    <div>
      <img
        className="avater"
        src={person.imageUrl}
        alt={person.name}
        width={150}
        height={150}
      />
    </div>
  );
}
