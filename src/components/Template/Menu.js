import React from 'react'
import { HashRouter, Link } from 'react-router-dom'

const Menu = () =>
  <HashRouter basename="/">
    <Link to="/">Home</Link>
    <Link to="/about">Sobre</Link>
  </HashRouter>

export default Menu
