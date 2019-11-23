import React from 'react'
import './ButtonArea.scss'

const ButtonArea = ({
  children,
  choiced,
  onClick
}) =>
  <button
    onClick={onClick}
    className={`ButtonArea ${ choiced ? 'ButtonArea--choiced' : '' }`}
  >
    { children }
  </button>

export default ButtonArea
