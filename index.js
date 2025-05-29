// //const sum = require("./sum");
// //console.log("Sum Of Two value ", sum(1, 2));
// const xyz = require("./sum");
// console.log(xyz);
// // const add = xyz.sum(1, 2);
// // const minus = xyz.substract(1, 2);
// // console.log(add);
// // console.log(minus);
// // console.log(xyz.a);

const { sum, substract, a } = require("./sumName");

console.log(sum(1, 2));
console.log(substract(2, 1));
console.log(a);

// // function sum(a, b) {
// //   return a - b;
// // }

// // sum(1, 2);
// //iife
// (function (a, b) {
//   console.log(a + b);
// })(1, 2);

console.log("File Name:" + __filename);

console.log("Dirname: " + __dirname);
