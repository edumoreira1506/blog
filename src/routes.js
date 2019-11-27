import React from 'react'
import About from './pages/About'
import Main from './pages/Main'
import Post from './pages/Post'
import Tag from './pages/Tag'
import { HashRouter, Route } from 'react-router-dom'

const routes = () =>
  <HashRouter basename="/">
    <Route exact path='/about' component={About} />
    <Route exact path='/' component={Main} />
    <Route path='/post/:day/:month/:year' component={Post} />
    <Route path='/tag/:tag' component={Tag} />
  </HashRouter>

export default routes
