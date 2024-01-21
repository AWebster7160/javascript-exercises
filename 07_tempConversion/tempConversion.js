const convertToCelsius = function(tempF) {
  let celsiusOutput = (tempF - 32) * 0.5555;
  celsiusOutput = Math.round(celsiusOutput * 10) / 10;
  return celsiusOutput;
};

const convertToFahrenheit = function(tempC) {
  let farenheitOutput = tempC * 1.8 + 32;
  farenheitOutput = Math.round(farenheitOutput * 10) / 10;
  return farenheitOutput;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
