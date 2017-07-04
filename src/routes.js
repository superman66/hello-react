/**
 * Created by superman on 17/3/3.
 * routes
 */
import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './App'
import Home from './Home'
import About from './About'
import Calculator from './component/Calculator'
import AnimateDemo from './animation/index'

export default (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>

        <Route path="/about/:username" component={About}/>
        <Route path='/calculator' component={Calculator}/>
        <Route path='/animation-demo' component={AnimateDemo}/>
      </Route>
    </Router>
)
