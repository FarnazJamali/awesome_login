import React, { forwardRef, InputHTMLAttributes } from 'react'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}
export const TextInputField = (
  { className, ...others }: InputProps,
  ref: React.LegacyRef<HTMLInputElement> | undefined,
) => {
  return <input className={`input w-full ${className}`} ref={ref} {...others} />
}
export const TextInput = forwardRef(TextInputField)