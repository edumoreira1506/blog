import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { IoIosMail } from "react-icons/io";
import './Contacts.scss'

const Contacts = () =>
  <div className="Contacts">
    <a className="Contacts__link" rel="noopener noreferrer" href="https://www.linkedin.com/in/uieduardo/" target="_blank">
      <FaLinkedinIn />
    </a>
    <a className="Contacts__link" rel="noopener noreferrer" href="https://github.com/edumoreira1506" target="_blank">
      <FaGithub />
    </a>
    <a className="Contacts__link" rel="noopener noreferrer" href="mailto:contato@eduardoem.com.br" target="_blank">
      <IoIosMail />
    </a>
    <a className="Contacts__link" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5515996442031&text=Ol%C3%A1%20Eduardo!" target="_blank">
      <FaWhatsapp />
    </a>
  </div>

export default Contacts
