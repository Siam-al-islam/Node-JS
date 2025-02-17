const path = require('path');
const myPath = 'D:/Web Development/node.js/index3.js';

console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));