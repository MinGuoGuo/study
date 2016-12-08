let express = require('express');
let bodyParser = require("body-parser");
let path = require('path');
let db = require('./mysql');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));// 获取post数据需要
app.use('/html', express.static(path.join(__dirname, 'views')));

app.get('/list_user', function (req, res) {
    console.log(req.body);
    db.query('select * from students', function(err, rows, fields){
        if (err) {
            console.log(err);
            return;
        }
        res.json(rows);
        // res.end(JSON.stringify(rows));
    });
});

//添加接口
app.get('/add_user', function (req, res) {
    var data = req.query;
    console.log();
    db.query('INSERT INTO students(name, sex, age, tel) VALUES("'+data.name+'",'+data.age+','+data.sex+','+data.tel+')', function(err, rows, fields){
        if (err) {
            console.log(err);
            return;
        }
        res.json(req.rows);
        // res.end(JSON.stringify(rows));
    });
    //res.json(req.query);
});

// 修改接口
app.get('/edit_user', function (req, res) {
    console.log(req.body);
    db.query('select * from students', function(err, rows, fields){
        if (err) {
            console.log(err);
            return;
        }
        res.json(rows);
        // res.end(JSON.stringify(rows));
    });
});

//
app.get('/del_user', function (req, res) {
    console.log(req.body);
    db.query('select * from students', function(err, rows, fields){
        if (err) {
            console.log(err);
            return;
        }
        res.json(rows);
        // res.end(JSON.stringify(rows));
    });
});

var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('访问地址为http://%s:%s',host,port);
});
