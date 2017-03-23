const express = require('express');
const app = express();
const student = require('../sqlStatement/connectDetail.js');

// 用于post请求；
// 创建 application/x-www-form-urlencoded 编码解析
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// 解决跨域问题；
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//查询页
app.get('/list', (req, res, next) => {
    student.list(req, res, next)
});

// 删除页
app.get('/del', (req, res, next) => {
    student.del(req, res, next);
});

// 新增页；
app.post('/add', urlencodedParser, (req, res, next) => {
    student.add(req, res, next);
});

// 详情页接口
app.post('/detail', urlencodedParser, (req, res, next) => {
    student.detail(req, res, next);
});

// 修改页面接口；
app.post('/update', urlencodedParser, (req, res, next) => {
    student.update(req, res, next)
});

// 设置静态文件；
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('hello static!')
});


const server = app.listen(9001, () => {
    console.log('监听9001端口成功');
});
