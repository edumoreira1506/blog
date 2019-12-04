import React from 'react'
import Post from './Post'
import './PostList.scss'

const PostList = ({ posts }) =>
  <ul className="PostList">
    {
      posts.map(post =>
        <Post
          key={post.date}
          date={post.date}
          title={post.title}
          tags={post.tags}
          content={post.content}
          description={post.description}
        />
      )
    }
  </ul>

export default PostList
