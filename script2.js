document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultArea = document.getElementById('resultArea');

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultArea.innerHTML = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let unit;

    // Conversion logic
    switch (unitSelect) {
        case 'Celsius':
            convertedTemperature = (temperature * 9/5) + 32; // Celsius to Fahrenheit
            unit = '°F';
            break;
        case 'Fahrenheit':
            convertedTemperature = (temperature - 32) * 5/9; // Fahrenheit to Celsius
            unit = '°C';
            break;
        case 'Kelvin':
            // Convert Kelvin to Celsius
            if (temperature < 0) {
                resultArea.innerHTML = 'Temperature in Kelvin cannot be negative.';
                return;
            }
            convertedTemperature = temperature - 273.15; // Kelvin to Celsius
            unit = '°C';
            break;
        default:
            resultArea.innerHTML = 'Invalid unit selected.';
            return;
    }

    // Display the result
    resultArea.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit}`;
});