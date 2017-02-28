/**
 * Created by superman on 17/2/28.
 */
import react, {Component} from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    render() {
        const value = this.props.value;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input type="text"
                       value={valule}
                       onChange={this.handleChange}
                />
            </fieldset>
        )
    }
}