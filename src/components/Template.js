import React from 'react'
import { Link, HashRouter } from 'react-router-dom'

const Template = ({
  children
}) =>
  <div>
    <HashRouter basename="/">
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
    </HashRouter>
    
    { children }
  </div>

export default Template
