function SelectInput({ map, value }:ISelectInputOptioProps) {
  const optionItems = map.options.map((option, index) => <option key={index}>{option}</option>)
  return (
    <div>
      <label htmlFor={map.label}>{map.label}</label>
      <select id={map.label} value={value}>
        {optionItems}
      </select>
    </div>
  )
}

export default SelectInput;