import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './App';
import Home from './Home'
import Calculator from './component/Calculator'
import About from './About'
import './index.css';

ReactDOM.render((
        <Router history={hashHistory}>
          <Route path="/" component={App}>

            <IndexRoute component={Home}/>

            <Route path="/about/:username" component={About}></Route>
            <Route path="/calculator" component={Calculator}></Route>
          </Route>
        </Router>
    ),
    document.getElementById('root')
);
