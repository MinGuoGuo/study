const mysql = require('mysql');
const sql = require('./student.js');
const pools = require('../pool/pool.js');
console.log(sql);

// 创建连接池;
let pool = mysql.createPool(pools.mysql);

// 向前台返回json方法的简单封装；
let jsonWrite = (response, result) => {
    if (typeof result === undefined) {
        response.json({
            code: '00',
            msg: '请求失败'
        });
    } else {
        console.log(result);
        response.json(result);
    }
};

// 将接口写成对象的形式暴露出去；
module.exports = {
    list: (req, res, next) => {
        pool.getConnection((err, connect) => {
            // 获取前台页面传过来的参数
            let param = req.query || req.params;

            // 建立连接，查询表中数据；
            connect.query(sql.list, [], (err, result) =>{
                if (err) {
                    console.log(err);
                    return;
                }
                let obj = {};
                if (result) {
                    obj = {
                        result: result,
                        code: 01,
                        msg: '请求成功！'
                    }
                }
                jsonWrite(res, obj);

                // 释放连接
                connect.release();
            })
        });
    },
}
