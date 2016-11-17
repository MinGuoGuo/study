const express = require('express');
const app = express();

//主页输出‘Hello Node’;
app.get('/', (req, res) => {
	console.log('主页的get请求');
	res.send('Hello GET!');
});

//POST请求
app.post('/', (req, res) => {
	console.log('主页POST请求');
	res.send('Hello POST');
});

// /del_user页面响应；
app.get('/del_user', (req, res) =>{
	console.log('/del_user响应delete请求')
	res.send('删除页面');
});

// /list_user页面GET请求
app.get('/list_user', (req, res) => {
	console.log('/list_user的请求');
	res.send('用户列表页');
});

//服务器来进行监听
const server = app.listen(9999, () =>{
	//const host
});
