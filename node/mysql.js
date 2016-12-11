var mysql = require('mysql');
// 测试数据库连接
// let arr = [];
// let obj = {};
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'min',
//   password : 'min',
//   database : 'test'
// });
// connection.connect();
// connection.query('select * from student', function(err, rows, fields) {
// 	if (err) {
// 		console.log(err);
//         obj.err = err;
//         obj.respCode = '01';
// 		return;
// 	};
// 	if(rows) {
// 		for (var i = 0; i < rows.length; i++) {
// 			console.log(rows[i]);
//             arr.push(rows[i]);
// 		}
//         obj.result = arr;
//         obj.msg = '请求成功';
//         obj.respCode = '00';
// 	}
// });
// connection.end();
// console.log('测试结束');
// module.exports = obj;

var pool = mysql.createPool({
    connectionLimit : 10,
    host : '127.0.0.1',
    user : 'min',
    password : 'min',
    port : 3306,
    database : 'test'
});

var dataBase = new Object();
dataBase.query = function (sql, callback) {
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

module.exports = dataBase;
