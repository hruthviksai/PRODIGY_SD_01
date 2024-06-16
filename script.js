function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let celsius, fahrenheit, kelvin;

    if (isNaN(temperature)) {
        document.getElementById('result').innerText = "Please enter a valid temperature.";
        return;
    }

    if (unit === "Celsius") {
        celsius = temperature;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (unit === "Fahrenheit") {
        fahrenheit = temperature;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (unit === "Kelvin") {
        kelvin = temperature;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    document.getElementById('result').innerText = 
        `Celsius: ${celsius.toFixed(2)} °C\n` +
        `Fahrenheit: ${fahrenheit.toFixed(2)} °F\n` +
        `Kelvin: ${kelvin.toFixed(2)} K`;
}
