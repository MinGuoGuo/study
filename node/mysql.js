var mysql = require('mysql');
// 测试数据库连接
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database : 'data_test'
// });
// connection.connect();
// connection.query('select * from test_node', function(err, rows, fields) {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	};
// 	if(rows) {
// 		for (var i = 0; i < rows.length; i++) {
// 			console.log(rows[i]);
// 		}
// 	}
// });
// connection.end();return;

var pool = mysql.createPool({
    connectionLimit : 10,
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    port : 3306,
    database : 'test'
});

var db = new Object();
db.query = function (sql, callback) {
    if(!sql) {
        callback();
        return;
    }
    pool.query(sql, function (err, rows, fields) {
        if(err) {
            console.log(err);
            callback(err, null);
            return;
        }
        callback(null, rows, fields);
    });
};

module.exports = db;