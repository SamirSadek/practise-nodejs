const { add, samir } = require("./local-1");
const { add: add2, samir: samir2 } = require("./local-2");

console.log(add(2, 3), samir);
console.log(add2(3, 3), samir2);

const path = require("path");
console.log(path.join("/E:/Level 2/Node/", "index.js"));
