import React, { useState } from 'react'
import Perfil from '../Perfil'
import CategoriesList from '../CategoriesList'
import Button from '../Button'
import TitleSite from '../TitleSite'
import Contacts from '../Contacts'
import { FaUserAlt } from 'react-icons/fa'
import { IoIosGlobe } from 'react-icons/io'

import './SideBar.scss'

const SideBar = () => {
  const [openedArea, setOpenedArea] = useState(0)

  const areas = [
    <Perfil />,
    <CategoriesList />
  ]

  return (
    <div className="SideBar">
      <div className="SideBar__buttons">
        <div className="SideBar__options">
          <Button
            onClick={() => setOpenedArea(0)}
            choiced={openedArea === 0}
          >
            <FaUserAlt />
          </Button>
          <Button
            onClick={() => setOpenedArea(1)}
            choiced={openedArea === 1}
          >
            <IoIosGlobe />
          </Button>
        </div>
      </div>
      <div className="SideBar__title">
        <TitleSite />
      </div>
      <Contacts />
      { areas[openedArea] }
    </div>
  )
}

export default SideBar
