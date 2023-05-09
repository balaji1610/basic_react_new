export default function DropdownComp({ value, onChange, options }) {
  return (
    <div>
      <select value={value} onChange={onChange}>
        {options.map((options) => {
          return <option value={options.value}>{options.label}</option>;
        })}
      </select>
    </div>
  );
}
