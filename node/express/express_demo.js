//引入express
const express = require('express');
let app = express();

app.get('/', (req, res) => {
	res.send('Hello Express!')
});

let server = app.listen(8888, () => {
	const host = server.address().address;
	const port = server.address().port;

	console.log('应用实例访问地址为http://%s:%s', host, port);
});