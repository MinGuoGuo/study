const mysql = require('mysql');
const conf = require('../conf/db.js');
const sql = require('./suerSqlMapping.js');
console.log(conf);
// 创建连接池;
let pool = mysql.createPool(conf.mysql);

// 向前台返回json方法的简单封装；
let jsonWrite = (response, result) => {
    if(typeof result === 'undefined') {
        response.json({
            code: '0',
            msg: '请求失败'
        });
    } else {
        console.log(result);
        response.json(result);
    }
}

module.exports = {
    list : (req, res, next) => {
        pool.getConnection((err, connect) => {
            // 获取前台页面传过来的参数
            let param = req.query || req.params;

            // 建立连接，查询表中数据
            connect.query(sql.list, [], (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                let par = {};
                if (result) {
                    par = {
                        result :result,
                        code: 00,
                        msg: '请求成功'
                    }
                }
                jsonWrite(res, par);

                //释放连接
                connect.release();
            });
        })
    }
}
