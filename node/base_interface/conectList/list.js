const app = require('express')();
//import student from '../connect/connect.js';
const student = require('../connect/connect.js')

// 解决跨域问题;
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/list', (req, res, next) => {
    student.list(req, res, next);
});

const server = app.listen(9000, () => {
    console.log('监听9000成功');
})
