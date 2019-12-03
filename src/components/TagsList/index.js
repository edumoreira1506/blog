import React from 'react'
import Tag from './Tag'
import { HashRouter } from 'react-router-dom'

const TagsList = ({
  tags
}) =>
  <HashRouter basename="/tag">
    {
      tags.map(tag =>
        <Tag tag={tag} key={tag} />
      )
    }
  </HashRouter>

export default TagsList
