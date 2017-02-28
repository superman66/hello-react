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
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({'value': e.target.value})
    };

    render() {
        const value = this.state.value;
        return (
            <div>
                <TemperatureInput scale="c"/>
                <TemperatureInput scale="f"/>
            </div>
        )
    }
}

export default Calculator;
