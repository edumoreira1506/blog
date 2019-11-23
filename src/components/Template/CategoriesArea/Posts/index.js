import React from 'react'
import Post from './Post'
import './PostsArea.scss'

const PostsArea = ({
  posts
}) =>
  <ul className="PostsArea">
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

export default PostsArea
