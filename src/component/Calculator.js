/**
 * Created by superman on 2017/2/27.
 */
import React, {Component} from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      scale: 'c'
    }
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }


  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  tryConvert(value, convert) {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  handleCelsiusChange = (value) => {
    this.setState({scale: 'c', value})
  };

  handleFahrenheitChange = (value) => {
    this.setState({scale: 'f', value})
  };


  render() {
    const scale = this.state.scale;
    const value = this.state.value;
    const celsius = scale === 'f' ? this.tryConvert(value, this.toCelsius) : value;
    const fahrenheit = scale === 'c' ? this.tryConvert(value, this.toFahrenheit) : value

    return (
        <div>
          <TemperatureInput scale="c" value={celsius} onChange={this.handleCelsiusChange}/>
          <TemperatureInput scale="f" value={fahrenheit} onChange={this.handleFahrenheitChange}/>
          <BoilingVerdict
              celsius={parseFloat(celsius)} />
        </div>
    )
  }
}

export default Calculator;
