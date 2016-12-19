const express = require('express');
const app = express();
const student = require('../sqlStatement/connectDetail.js');
console.log(student.list);

app.get('/list_student', (req, res, next) => {
    student.list(req, res, next)
});


const server = app.listen(9001, () => {
    console.log('监听9001端口成功');
});
