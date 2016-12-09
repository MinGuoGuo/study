const http = require('http');
const querystring = require('querystring');
const util = require('util');


http.createServer((req, res) => {
    let post = ''; // 定义一个post变量，用于暂存请求提的信息

    req.on('data', (chunk) => {
        post += chunk;
    })

    req.on('end', () => {
        post = querystring.parse(post);
        res.end(util.inspect(post))
    });
}).listen(9001);
