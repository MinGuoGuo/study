const app = require('express')();
//import student from '../connect/connect.js';
const student = require('../connect/connect.js')
console.log(student);

// 解决跨域问题;
app.all('*', (req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "X-Requested-With");
    req.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    req.header("X-Powered-By",' 3.2.1');
    req.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/list', (req, res, next) => {
    student.list(req, res, next);
    res.end('请求成功！')
});

const server = app.listen(9000, () => {
    console.log('监听9000成功');
})
