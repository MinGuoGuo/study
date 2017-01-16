const app = require('express')();
const student = require('../connect/connect.js');
// 解决跨域问题；
app.all('*', function(req, res, next) {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "X-Requested-With");
    req.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    req.header("X-Powered-By",' 3.2.1');
    req.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/list_student', (req, res, next) => {
    student.list(req, res, next);
})

const server = app.listen(9000, (req, res) => {

});
