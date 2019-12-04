import React from 'react'
import Post from './Post'
import './Posts.scss'

const Posts = ({
  posts
}) =>
  <ul className="Posts">
    {
      posts.map(post =>
        <Post
          title={post.title}
          description={post.description}
          date={post.date}
          key={post.date} 
        />
      )
    }
  </ul>

export default Posts
