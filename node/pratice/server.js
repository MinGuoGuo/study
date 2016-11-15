/*
var http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    //发送响应内容
    res.end('Hello Node.js!');
}).listen(8888);

console.log('响应结束');*/

//官方实例
const http = require('http');
const hostname = 'localhost';
const port = 3333;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Node.js');
});

//对此端口进行监听
server.listen(port, hostname, () => {
    console.log('我在监听服务器！')
});

console.log(__filename);
console.log(__dirname);