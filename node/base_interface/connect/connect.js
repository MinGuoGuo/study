//  针对返回结果的封装；
const mysql = require('mysql');
// 引入sql语句
//import sql from '../sqlList/student.js';
const sql = require('../sqlList/student.js')
// 引入数据库；
//import database from '../pool/poo.js';
const database = require('../pool/poo.js')
// console.log(sql.student.list);
console.log('数据库', database.student);

// 创建连接池
let pool = mysql.createPool(database.student);

// 向前端返回值简单封装；
let returnStatement = (response, result) => {
    if (typeof result == undefined) {
        response.json({
            code: '00',
            msg: '请求失败'
        });
    } else {
        response.json(result);
    }
};

// 将接口写成功对象的形式暴露出去；
module.exports = {
    list: (req, res, next) => {
        // 获取前台页面传过来的参数；
        let params = req.query || req.params;
        pool.getConnection((err, connect) => {
            connect.query(sql.student.list, [], (err, result) => {
                if (err) {
                    throw err;
                    return;
                }
                let obj = {};
                if (result) {
                    obj = {
                        result: result,
                        code: '01',
                        msg: '请求成功!'
                    }
                }
                // 重写接口；
                returnStatement(res, obj);
                // 释放连接
                connect.release();
            });
        });
    }
}
