const express = require('express');
const app = express();
const http = require('http');

app.use((req, res, next) => {
    console.log(req.url);
    if (req.url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8',
        });
        res.end('主页');
    } else {
        next();
    }
});
app.use((req, res, next) => {
    console.log(req.url.substr(1));
    if (req.url == '/list') {
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8',
        })
        res.end('列表页')
    } else {
        next();
    }
});

http.createServer(app).listen(9001, () => {
    console.log('监听9001成功');
})
