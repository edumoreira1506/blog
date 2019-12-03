import React from 'react'
import './Button.scss'

const Button = ({
  children,
  choiced,
  onClick
}) =>
  <button
    onClick={onClick}
    className={`Button ${ choiced ? 'Button--choiced' : '' }`}
  >
    { children }
  </button>

export default Button
