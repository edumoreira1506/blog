import React from 'react'
import './Post.scss'
import * as PostModel from '../../models/posts'
import { HashRouter, Link } from 'react-router-dom'

const Post = ({
  date,
  title,
  tags,
  content
}) =>
  <HashRouter basename="/">
    <Link to={`post/${date}`}>
      <li className="BigPost">
        <h3 className="BigPost__title">
          { title }
        </h3>
        <p className="BigPost__content">
          { PostModel.getContent(content) }
        </p>
        <h5 className="BigPost__details">
          { date }
          { 
            tags.length &&
              <HashRouter basename="/">
                {
                  tags.map(tag =>
                    <Link to={`tag/${tag}`}>
                      { tag }
                    </Link>
                  )
                }
              </HashRouter> 
          }
        </h5>
      </li>
    </Link>
  </HashRouter>

export default Post
