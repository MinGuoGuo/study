const express = require('express');
let app = express();

// 主页输出'Hello Express'
app.get('/', (req, res) => {
    console.log('主页请求');
    res.send('Hello Get!')
});

// post请求;
app.post('/', (req, res) => {
    console.log('主页post请求');
    res.send('Hello Post');
});

// /del_user 页面响应;
app.get('/del_user', (req, res) => {
    console.log('del_user请求');
    res.send('删除页面请求');
});

// /list_user 页面响应；
app.get('/list_user', (req, res) => {
    console.log('/list_user请求');
    res.send('用户列表页请求');
});

// 对以上页面进行监听;
const server = app.listen(9001, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('host', host);
    console.log('port', port);
});
