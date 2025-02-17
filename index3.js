const path = require('path');
const os = require('os');
const fs = require('fs');
const myPath = 'D:/Web Development/node.js/index3.js';

console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));

console.log(os.platform());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.type());
console.log(os.cpus());
console.log(os.version());

fs.writeFileSync('test.txt', 'Hello Programmers');
fs.appendFileSync('test.txt', ' How are you?');

fs.readFile('test.txt', (err, data) => {
    console.log(data.toString());
});