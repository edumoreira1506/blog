import React from 'react'
import { Link, HashRouter } from 'react-router-dom'
import './Post.scss'

const Post = ({
  title,
  description,
  date
}) =>
  <HashRouter basename="/post">
    <Link to={date}>
      <li className="PostCategory">
        <h3 className="PostCategory__title">
          { title }
        </h3>
        <h4 className="PostCategory__description">
          { description }
        </h4>
        <h5 className="PostCategory__date">
          { date }
        </h5>
      </li>
    </Link>
  </HashRouter>

export default Post
