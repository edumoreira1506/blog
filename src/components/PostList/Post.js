import React from 'react'
import Link from '../Link'
import './Post.scss'

const Post = ({
  date,
  title,
  tags,
  description
}) =>
  <Link to={`post/${date}`}>
    <li className="Post">
      <h3 className="Post__title">
        { title }
      </h3>
      <p className="Post__content">
        { description }
      </p>
      <h5 className="Post__details">
        { date }
        { 
          tags.map(tag =>
            <Link key={tag} to={`tag/${tag}`}>
              { tag }
            </Link>
          )
        }
      </h5>
    </li>
  </Link>

export default Post
