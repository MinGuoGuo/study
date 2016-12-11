const express = require('express');
const app = express();
let userDao = require('../dao/userDao.js');

app.get('/user_list', (req, res, next) => {
    userDao.list(req, res, next);
});

const server = app.listen(9001, () => {
    console.log('执行成功!');
});
