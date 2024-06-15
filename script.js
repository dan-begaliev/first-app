document.addEventListener("DOMContentLoaded", function () {
  const inputTemperature = document.querySelector(
    '.left-container input[type="number"]'
  );
  const fromTempSelect = document.getElementById("from-temp");
  const toTempSelect = document.getElementById("to-temp");
  const convertButton = document.querySelector(".left-container button");
  const rightContainer = document.querySelector(".right-container");

  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function convertTemperature() {
    let inputTemp = parseFloat(inputTemperature.value);
    let convertedTemp;

    if (
      fromTempSelect.value === "option1" &&
      toTempSelect.value === "option2"
    ) {
      convertedTemp = celsiusToFahrenheit(inputTemp);
      rightContainer.textContent = `${inputTemp}°C is ${convertedTemp.toFixed(
        2
      )}°F`;
    } else if (
      fromTempSelect.value === "option2" &&
      toTempSelect.value === "option1"
    ) {
      convertedTemp = fahrenheitToCelsius(inputTemp);
      rightContainer.textContent = `${inputTemp}°F is ${convertedTemp.toFixed(
        2
      )}°C`;
    } else {
      rightContainer.textContent = "Please select different units to convert.";
    }
  }

  convertButton.addEventListener("click", convertTemperature);
});
