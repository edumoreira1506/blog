import React from 'react'
import Link from '../Link'

const Tag = ({
  tag
}) =>
  <Link to={`tag/${tag}`}>
    { tag }
  </Link>


export default Tag
