import { SelectHTMLAttributes } from "react";

export interface Option {
  label: string;
  value: string
  selected?: boolean
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[]
}
 
export function Select({children, options, ...rest}: SelectProps){
  return (
    <select defaultValue={options.find(item => item.selected)?.value} className="outline-none h-12 flex items-center gap-3 py-4 px-3 bg-gray-800 w-full text-gray-100 rounded text-xs placeholder:text-gray-400 focus-within:ring-2 ring-cyan-300" {...rest}>
      {options.map((option) => {
        const { value, label } = option
        return <option value={value}>{label}</option>
      })}
    </select>
  )
}

