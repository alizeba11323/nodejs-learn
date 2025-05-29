// function sum(a, b) {
//   return a + b;
// }

// module.exports = sum; // default exports

// name exports
exports.a = 10;
exports.sum = function (a, b) {
  return a + b;
};

exports.substract = function (a, b) {
  return a - b;
};
