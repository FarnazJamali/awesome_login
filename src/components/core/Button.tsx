import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean
}

export const Button = ({
  full,
  children,
  className,
  ...props
}: ButtonProps) => (
  <button
    className={
      'btn' + (full ? ' btn-block' : '') + (className ? ' ' + className : '')
    }
    {...props}
  >
    {children}
  </button>
)
