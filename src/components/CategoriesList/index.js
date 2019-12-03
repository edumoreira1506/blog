import React, { useState } from 'react'
import Search from '../Search'
import Posts from './Posts'
import TagsList from '../TagsList'
import * as Post from '../../models/posts'
import * as Tag from '../../models/tags'
import './CategoriesList.scss'

const CategoriesList = () => {
  const [posts, setPosts] =  useState(Post.getAll())
  const [keyWord, setKeyWord] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    setPosts(Post.search(keyWord))
  }

  const onChange = e => {
    e.preventDefault()

    setKeyWord(e.target.value)
  }

  return (
    <div className="CategoriesList">
      <div className="CategoriesList__block">
        <Search
          onSubmit={onSubmit}
          value={keyWord}
          onChange={onChange}
        />
      </div>
      <div className="CategoriesList__tags">
        <TagsList
          tags={Tag.getAll()}
        />
      </div>
      <div className="CategoriesList__block">
        <Posts
          posts={posts}
        />
      </div>
    </div>   
  )
}

export default CategoriesList
