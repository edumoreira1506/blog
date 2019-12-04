import React from 'react'
import { baseUrl } from '../../models/url'

const Link = ({ to, children }) =>
  <a href={`${baseUrl()}#/${to}`}>
    { children }
  </a>

export default Link
