/*通过app.use来注册中间件*/
const express = require('express');
const app = express();
const http = require('http');

app.use((req, res, next) => {
    console.log('我是第一个中间件');
    next();
});

app.use((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('hello express');
});

http.createServer(app).listen(1991, () => {
    console.log('监听成功1991端口');
});
