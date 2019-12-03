import React from 'react'
import PostList from '../components/PostList'
import * as Post from '../models/posts'
import * as TagModel from '../models/tags'
import './Tag.scss'

const Tag = ({ match }) =>
  <div className="Tag">
    <PostList
      posts={Post.getByTag(TagModel.getTag(match))}
    />
  </div>

export default Tag

