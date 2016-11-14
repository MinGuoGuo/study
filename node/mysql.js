var mysql = require('mysql'); //将mysql引入进来

/*测试数据库连接是否成功*/
/*
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});
connection.connect();
connection.query('select * from students', function (err, rows, fields) {
    if (err) {
        console.log(err);
        return;
    }
    if (rows) {
        for (var i = 0; i < rows.length; i++) {
            console.log(rows[i]);
        }
    }
});
connection.end();*/

/*创建一个连接池*/
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});

var db = new Object();
db.query = function (sql, callback) {
    if (!sql) {
        callback();
        return;
    }
    pool.query(sql, function (err, rows, fields) {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, rows, fields)
    });
};

module.exports = db;