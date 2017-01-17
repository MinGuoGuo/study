const express = require('express');
const app = express();
const student = require('../sqlStatement/connectDetail.js');
// 解决跨域问题；
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/list', (req, res, next) => {
    student.list(req, res, next)
});

app.get('/del_student', (req, res, next) => {
    student.del(req, res, next);
});

const server = app.listen(9001, () => {
    console.log('监听9001端口成功');
});
