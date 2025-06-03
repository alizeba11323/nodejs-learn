const path = require("path");
//extname
console.log(path.extname("index.js"));
console.log(path.extname("index.md"));
console.log(__filename);
console.log(path.extname(__filename));

//dirname

console.log(path.dirname("/dir/app/index.js"));

console.log(path.dirname(__filename));

// basename

console.log(path.basename("/dir/app/main.md", ".md"));
//path creation
//join

console.log(path.join("app", "dir", "main", "index.js"));

// resolve

console.log(path.resolve("app", "index.js"));

//parse

console.log(path.parse(__filename));

// normalize
console.log(path.normalize("/users/admin/./index.js"));
