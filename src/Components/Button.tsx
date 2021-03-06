import type {IButtonProps} from "../typings/form"

const buttonClass = `
  bg-gray-800
  hover:bg-gray-700
  active:bg-black
  text-white
  h-12
  py-2
  px-4
`

function Button({map}:IButtonProps) {
  return (
    <input
      className={buttonClass}
      type={map.type}
      value={map.label}

    />
  )
}



export default Button;