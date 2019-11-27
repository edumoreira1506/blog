import React from 'react'
import './Post.scss'
import { HashRouter, Link } from 'react-router-dom'

const Post = ({
  date,
  title,
  tags,
  description
}) =>
  <HashRouter basename="/post">
    <Link to={date}>
      <li className="BigPost">
        <h3 className="BigPost__title">
          { title }
        </h3>
        <p className="BigPost__content">
          { description }
        </p>
        <h5 className="BigPost__details">
          { date }
          { 
            tags &&
              <HashRouter basename="/tag">
                {
                  tags.map(tag =>
                    <Link key={tag} to={tag}>
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
