import React from 'react'
import Tag from './Tag'

const TagsList = ({
  tags
}) =>
  tags.map(tag =>
    <Tag tag={tag} key={tag} />
  )

export default TagsList
