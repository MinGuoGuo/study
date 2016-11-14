var express = require('express');
//var bodyParser = require('body-parser');
var path = require('path');
var db = require('./mysql');
var app = express();

app.get('/list_user', function (rep, res) {
    db.query('select * from students', function (err, rows, fields) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(rows);
    });
});

/*创建一个服务器*/
var server = app.listen(9999, function () {
    var host = server.address().addresee;
    var port = server.address().port;
    console.log(server.address());
});