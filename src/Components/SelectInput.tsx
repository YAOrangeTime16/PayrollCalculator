import type {ISelectInputOptioProps} from "../typings/form"
const selectStyle = `h-12 w-1/3 p-2 border border-solid border-gray-300`

function SelectInput({ map, value, onChangeMethod }: ISelectInputOptioProps) {
  const optionItems = map.options.map((option, index) => <option key={index}>{option}</option>)
  return (
    <div className="flex flex-col">
      <label htmlFor={map.label}>{map.label}</label>
      <select id={map.label} className={selectStyle} value={value} onChange={(e) => onChangeMethod(e)}>
        {optionItems}
      </select>
    </div>
  )
}

export default SelectInput;