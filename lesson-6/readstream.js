// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/data.txt`);

// ourReadStream.on('data', (chunk) => {
//     console.log(chunk.toString());
// });

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title></title></head>');
        res.write('<body><form method="post" action="/process"><input name="message"></input></form></body>');
        res.end();
    }
    else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('Stream Finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.write('Thank you for your message');
            res.end();
        });
    }
    else {
        res.write('404 page not found');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running at 3000');
})