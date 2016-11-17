//获取get请求中ur？后面的参数；
const http = require('http');
const url = require('url');
const util = require('util');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
	console.log(typeof req.url);
	//console.log(typeof util.inspect(url.parse(req.url)));
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);

/*util是直接类工具，util.inspect直接将对象转换成字符串*/