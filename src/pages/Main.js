import React from 'react'
import Posts from '../components/Posts'
import * as Post from '../models/posts'
import './Main.scss'

const Main = () =>
  <div className="Main">
    <div className="Main__welcome">
      <h3>Bem vindo ao <b>meu mundo!</b></h3>
    </div>
    <Posts
      posts={Post.getAll()}
    />
  </div>

export default Main
