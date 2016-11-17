const http = require('http');
const fs = require('fs');
const url = require('url');
const util = require('util');

//创建服务器
http.createServer((request, response) => {
	// 解析请求，包括文件名
	const pathname = url.parse(request.url).pathname;
	//console.log(pathname);
	// 输出请求的文件名
	console.log('Request for' + pathname + 'received');

	// 从文件系统中读取请求的文件内容
	fs.readFile(pathname.substr(1), (err, data) => {
		if (err) {
			console.log(err);
			//HTTP状态码：404-->NOT FOUND
			//Content Type： text/plain
			response.writeHead(404, {
				'Content-Type': 'text/plain'
			})
		} else {
			//HTTP状态码200： OK
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			//响应文件内容
			response.write(data.toString());
		}
		// 发送响应数据
		response.end();
	});
}).listen(8081);


/*
const str = '123456789';
console.log(str.substr(1));*/
