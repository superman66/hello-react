import React, {Component} from 'react';
import NavLink from './NavLink'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <ul className="nav">
            <li>
              <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/calculator">Calculator</NavLink>
            </li>
            <li>
              <NavLink to="/about/superman">About</NavLink>
            </li>
            <li>
              <NavLink to="/animation-demo">AnimationDemo</NavLink>
            </li>
          </ul>

          {/*if props.children is blank, then render Home Component*/}
          {this.props.children}
        </div>
    );
  }
}

export default App;
