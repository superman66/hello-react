/**
 * Created by superman on 17/3/3.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'

class NavLink extends Component {
  render() {
    return (
        <Link {...this.props} activeClassName="active" ></Link>
    )
  }
}

export default NavLink