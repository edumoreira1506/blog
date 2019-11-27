import React from 'react'
import Posts from '../components/Posts'
import * as Post from '../models/posts'
import * as TagModel from '../models/tags'
import './Tag.scss'

const Tag = ({ match }) =>
  <div className="Tag">
    <Posts
      posts={Post.getByTag(TagModel.getTag(match))}
    />
  </div>

export default Tag

