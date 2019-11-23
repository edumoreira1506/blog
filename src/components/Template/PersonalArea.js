import React, { useState } from 'react'
import PerfilArea from './PerfilArea/index'
import CategoriesArea from './CategoriesArea/index'
import ButtonArea from './ButtonArea'
import TitleSite from './TitleSite'
import { FaUserAlt } from 'react-icons/fa'
import { IoIosGlobe } from 'react-icons/io'

import './PersonalArea.scss'

const PersonalArea = () => {
  const [openedArea, setOpenedArea] = useState(0)

  const areas = [
    <PerfilArea />,
    <CategoriesArea />
  ]

  return (
    <div className="PersonalArea">
      <div className="PersonalArea__buttons">
        <div className="PersonalArea__options">
          <ButtonArea
            onClick={() => setOpenedArea(0)}
            choiced={openedArea === 0}
          >
            <FaUserAlt />
          </ButtonArea>
          <ButtonArea
            onClick={() => setOpenedArea(1)}
            choiced={openedArea === 1}
          >
            <IoIosGlobe />
          </ButtonArea>
        </div>
      </div>
      <div className="PersonalArea__title">
        <TitleSite />
      </div>
      { areas[openedArea] }
    </div>
  )
}

export default PersonalArea
