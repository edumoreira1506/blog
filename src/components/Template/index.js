import React from 'react'
import SideBar from '../SideBar'
import Menu from '../Menu'

import './Template.scss'

const Template = ({
  children
}) =>
  <div className="Template">
    <div className="Template__personal">
      <SideBar />
    </div>
    <div className="Template__content">
      <div className="Template__menu">
        <Menu />
      </div>
      { children }
    </div>
  </div>

export default Template
