const mysql = require('mysql');
const sql = require('./student.js');
const database = require('../pool/pool.js');
console.log(sql.list);
console.log(database.students);

// 创建连接池；就是把数据库引入
let pool = mysql.createPool(database.students);

// 想前台返回json方法的简单封装；
let returnStatement = (response, result) => {
    if (typeof result == undefined) {
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
        // 建立连接
        pool.getConnection((err, connect) =>{
            // 获取前台页面传过来的参数
            let params = req.query || req.params;
            // 开始执行sql语句；查询表中的数据；
            connect.query(sql.list, [], (err, result) => {
                if (err) {
                    throw err;
                    return;
                }
                let obj = {};
                if(result) {
                    obj = {
                        result: result,
                        code: '01',
                        msg: '请求成功'
                    }
                }
                // 重写接口；
                returnStatement(res, obj);
                //释放连接；
                connect.release();
            })
        });
    },
}
