import React from 'react'
import PersonalArea from './PersonalArea'
import Menu from './Menu'

import './Template.scss'

const Template = ({
  children
}) =>
  <div className="Template">
    <div className="Template__personal">
      <PersonalArea />
    </div>
    <div className="Template__content">
      <div className="Template__menu">
        <Menu />
      </div>
      { children }
    </div>
  </div>

export default Template
