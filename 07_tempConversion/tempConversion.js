const convertToCelsius = function(f) {
  let result = (f - 32) * 5/9;
  return Math.round(result*10)/10;
};

const convertToFahrenheit = function(c) {
  let result = (c * (9/5) + 32);
  return Math.round(result*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
