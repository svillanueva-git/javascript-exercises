const ftoc = function(temp) {
  let celsiusConvert = (temp - 32) * (5/9);
  return Number(celsiusConvert.toFixed(1));
}

const ctof = function(temp) {
  let fahrenheitConvert = temp * (9/5) + 32;
  return Number(fahrenheitConvert.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
