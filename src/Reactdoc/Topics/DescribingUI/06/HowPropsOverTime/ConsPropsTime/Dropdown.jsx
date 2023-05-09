export default function Dropdown({ socialMedia, onChange, options }) {
  return (
    <div>
      <select value={socialMedia} onChange={onChange}>
        {options.map((options) => {
          return <option value={options.value}>{options.label}</option>;
        })}
      </select>
    </div>
  );
}
