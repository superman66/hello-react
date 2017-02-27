/**
 * Created by superman on 2017/2/27.
 */
import React, {Component} from 'react'
import BoilingVerdict from './BoilingVerdict'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({'value': e.target.value})
  };

  render() {
    const value = this.state.value;
    return (
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input type="text"
                 value={value}
                 onChange={this.handleChange}
          />

          <BoilingVerdict celsius={parseFloat(value)}/>
        </fieldset>
    )
  }
}

export default Calculator;
