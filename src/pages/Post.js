import React from 'react'
import * as PostModel from '../models/posts'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import Link from '../components/Link'
import ReactMarkdown from 'react-markdown'
import './Post.scss'

const Post = ({ match }) => {
  try {
    const post = PostModel.getPost(match)

    return (
      <div className="Article">
        <h2 className="Article__title">
          { post.title }
        </h2>
        <h3 className="Article__description">
          { post.description }
        </h3>
        {
          post.images.length ?
            <div className="Article__carousel">
              <Carousel autoPlay>
                {
                  post.images.map(image =>
                    <img src={image} alt={image} key={image} />
                  )
                }
              </Carousel>
            </div> : null
        }
        <div className="Article__content">
          <ReactMarkdown source={post.content} />
        </div>
        <div className="Article__details">
          {
            post.tags.map(tag =>
              <Link key={tag} to={`tag/${tag}`}>{ tag }</Link>
            )
          }
          <span className="Article__details--bold">
            { post.date }
          </span>
        </div>
      </div>
    )
  } catch {
    return null
  }
}

export default Post
