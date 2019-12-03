import React from 'react'
import { Link } from 'react-router-dom'

const Tag = ({
  tag
}) =>
  <Link to={tag}>
    { tag }
  </Link>


export default Tag
