import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children}: TextInputRootProps){
  return (
    <div className='h-12 flex items-center gap-3 py-4 px-3 bg-gray-800 w-full text-gray-100 rounded text-xs placeholder:text-gray-400 focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  )
}
export interface TextInputIconProps {
  children: ReactNode
}
export function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}
function TextInputInput({...props}: TextInputInputProps) {
  return (
      <input className='bg-transparent outline-none flex-1 w-full text-gray-100 text-xs placeholder:text-gray-400' 
      {...props} 
      />
  )
}

TextInputRoot.displayName = 'TextInput.Root'
TextInputIcon.displayName = 'TextInput.Icon'
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}