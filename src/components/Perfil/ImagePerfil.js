import React from 'react'
import { baseUrl } from '../../models/url'
import './ImagePerfil.scss'

const ImagePerfil = () =>
  <img
    className="ImagePerfil"
    src={`${baseUrl()}eduardo.jpg`}
    alt="Eduardo Moreira"
  />

export default ImagePerfil
