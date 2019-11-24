import React, { useState } from 'react'
import SearchArea from './SearchArea'
import PostsArea from './Posts'
import TagsArea from './TagsArea'
import * as Post from '../../../models/posts'
import * as Tag from '../../../models/tags'
import './CategoriesArea.scss'

const CategoriesArea = () => {
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
    <div className="CategoriesArea">
      <div className="CategoriesArea__block">
        <SearchArea
          onSubmit={onSubmit}
          value={keyWord}
          onChange={onChange}
        />
      </div>
      <div className="CategoriesArea__tags">
        <TagsArea
          tags={Tag.getAll()}
        />
      </div>
      <div className="CategoriesArea__block">
        <PostsArea
          posts={posts}
        />
      </div>
    </div>   
  )
}

export default CategoriesArea
