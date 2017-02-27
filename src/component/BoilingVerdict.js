/**
 * Created by superman on 2017/2/27.
 */

import React, {Component} from 'react'

class BoilingVerdict extends Component {

  render() {
    if (this.props.celsius >= 100) {
      return <p>the water would boil</p>
    }
    else {
      return <p>the water would not boil</p>
    }
  }
}

export default BoilingVerdict;