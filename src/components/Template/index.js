import React from 'react'
import { Link, HashRouter } from 'react-router-dom'

import './Template.scss'

const Template = ({
  children
}) =>
  <div className="Template">
    <HashRouter basename="/">
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
    </HashRouter>
    
    { children }
  </div>

export default Template
