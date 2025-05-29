// (function (require, __filename, __dirname, module, exports) {
//   const mathModule = require("./sum");

//   console.log(a);

//   console.log(mathModule.sum(1, 2));
// })();

const city = ["city1", "city2", "city3"];

const lodash = require("lodash");

console.log(lodash.map(city, lodash.capitalize));
