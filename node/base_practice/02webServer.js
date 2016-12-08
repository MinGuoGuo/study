const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 8089;
const hostname = 'localhost';

// 创建服务器；
const server= http.createServer((req, res) => {

    //console.log('req', req);
    //console.log('req.url', req.url);
    //console.log('url.parse(req.url)', url.parse(req.url));
    // 请求解析，包括文件名；
    const pathname = url.parse(req.url).pathname;

    // 输出的请求文件名；
    console.log('pathname', pathname );;

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        if (err) {
            console.log(err);
            // http状态码：404：not found
            res.statusCode = 404;
        }else{
            // 请求成功；
            res.statusCode = 200;
            // 响应文件内容
            res.write(data.toString());
        }
        // 发送响应数据
        res.end();
    });
});

server.listen(port, hostname, () => {
    console.log('端口8089正在监听中');
})
