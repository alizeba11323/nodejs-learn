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

// format

console.log(
  path.format({
    root: "C:\\",
    dir: "C:\\Users\\sutan\\OneDrive\\Desktop\\nodejs_learn",
    base: "pathModule.js",
    ext: ".js",
    name: "pathModule",
  })
);
// normalize
console.log(path.normalize("/users/admin/./index.js"));

// isAbsolute

console.log(path.isAbsolute("/users/index.js"));
