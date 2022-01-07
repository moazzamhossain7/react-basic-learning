import React from 'react';
import { convert, toCelsius, toFahrenheit } from '../lib/mixin';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
    state = {
        temperature: 0,
        scale: 'c',
    };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(toCelsius, temperature) : temperature;
        const fahrenheit = scale === 'c' ? convert(toFahrenheit, temperature) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleChange}
                />
                <BoilingVerdict temperature={temperature} />
            </div>
        );
    }
}
