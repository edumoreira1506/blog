import React from 'react'
import { Link, HashRouter } from 'react-router-dom'
import './Post.scss'

const Post = ({
  title,
  description,
  date
}) =>
  <HashRouter basename="/">
    <Link to={`/post/${date}`}>
      <li className="Post">
        <h3 className="Post__title">
          { title }
        </h3>
        <h4 className="Post__description">
          { description }
        </h4>
        <h5 className="Post__date">
          { date }
        </h5>
      </li>
    </Link>
  </HashRouter>

export default Post
