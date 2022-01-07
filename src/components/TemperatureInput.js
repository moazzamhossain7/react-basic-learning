const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter your temperature in {scaleNames[scale]}:</legend>
            <input
                type="text"
                value={temperature}
                onChange={(e) => onTemperatureChange(e, scale)}
            />
        </fieldset>
    );
}
