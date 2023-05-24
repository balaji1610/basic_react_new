export default function Todoinput({
  type,
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
