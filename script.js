function convert() {
    var temperature = parseFloat(document.getElementById("inputTemp").value);
    var unit = document.getElementById("selectFrom").value;
    var resultElement = document.getElementById("result");

    if (unit === "celsius") {
        var fahrenheit = (temperature * 9 / 5) + 32;
        resultElement.innerHTML = temperature + "°C = " + fahrenheit + "°F";
    } else if (unit === "fahrenheit") {
        var celsius = (temperature - 32) * 5 / 9;
        resultElement.innerHTML = temperature + "°F = " + celsius + "°C";
    }
}