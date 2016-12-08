const http = require('http');

http.createServer((req, res) => {
    console.log(11);
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('hello node!')
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello Node.js');
}).listen(8889);

console.log('我在监听端口');
