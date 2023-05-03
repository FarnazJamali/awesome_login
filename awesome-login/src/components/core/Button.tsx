import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  full,
  children,
  className,
  ...props
}) => (
  <button
    className={
      'btn' + (full ? ' btn-block' : '') + (className ? ' ' + className : '')
    }
    {...props}
  >
    {children}
  </button>
)
