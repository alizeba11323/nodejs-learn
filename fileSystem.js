const fs = require("fs");
// //asynchronous;
// fs.readFile("./index.txt", function (err, data) {
//   if (err) {
//     return console.log("Error Occur: ", err);
//   }
//   console.log("Data Found ", data.toString());
// });
// console.log("Hello");
// const data = fs.readFileSync("./index.txt");
// console.log(data.toString());
// console.log("Hello ");

// read file

// readfilesync

//write inside the file

fs.writeFile("./index.txt", "New Data", function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("Written");
});

fs.appendFile("./index.txt", "\nNew One Added", function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("Written");
});

fs.unlink("./index.txt", function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("File Deleted");
});
