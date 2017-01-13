const http = require('http');

// http.createServer((req, res) => {
//     // res.writeHead(200, {
//     //     'Content-Type': 'text/plain'
//     // });
//     res.end('hello node!')
//     // res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/plain');
//     // res.end('Hello Node.js');
// }).listen(8889);
//
// console.log('我在监听端口');
const server = http.createServer( (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    //res.end('hello end');
    //res.write('hello write');
    res.end();
});
server.listen(9999, () =>{
    console.log('我正在监听');
});
