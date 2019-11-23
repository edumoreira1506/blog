import React from 'react'
import Post from './Post'
import './Posts.scss'

const Posts = ({ posts }) =>
  <ul className="Posts">
    {
      posts.map(post =>
        <Post
          key={post.date}
          date={post.date}
          title={post.title}
          tags={post.tags}
          content={post.content}
        />
      )
    }
  </ul>

export default Posts
