//获取get请求中ur？后面的参数；
const http = require('http');
const url = require('url');
const util = require('util');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);