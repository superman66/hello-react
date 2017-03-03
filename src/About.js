/**
 * Created by superman on 17/3/3.
 */
import React, {Component} from 'react'

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
        <div>
          hey, this is {this.props.params.username}!
        </div>
    )
  }
}

export default About