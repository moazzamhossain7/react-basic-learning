export function toCelsius(temperature) {
    return ((temperature - 32) * 5) / 9;
}

export function toFahrenheit(temperature) {
    return (temperature * 9) / 5 + 32;
}

export function convert(convertTo, temperature) {
    const input = parseFloat(temperature);

    if (Number.isNaN(input)) {
        return '';
    }
    const result = convertTo(input);
    const output = Math.round(result * 1000) / 1000;
    return output.toString();
}
