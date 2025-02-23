const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/data.txt`);
    myReadStream.pipe(res);
});

server.listen(3000, () => {
    console.log('Server is running at 3000');
});