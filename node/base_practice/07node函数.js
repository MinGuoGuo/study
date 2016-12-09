const http = require('http');

const onRequest = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('hello node.js');
    res.end();
}
const server = http.createServer(onRequest);
const port = 9001;
server.listen(port, () => {
    console.log('监听中', port);
});
console.log('filename', __filename);
console.log('dirname', __dirname);
console.info('程序执行开始');
