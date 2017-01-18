const mysql = require('mysql');
const sql = require('./student.js');
const pools = require('../pool/pool.js');
// console.log('sql', sql.list);

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
        response.json(result);
    }
};

// 将接口写成对象的形式暴露出去；
module.exports = {
    list: (req, res, next) => {
        pool.getConnection((err, connect) => {
            // 获取前端页面传过来的参数
            let param = req.query || req.params;
            let list = sql.list;
            if (param.name != '' && param.age == '') {
                list = list + " where name like '%"+param.name+"%'";
            }
            if (param.name == '' && param.age != '') {
                list = list + " where age like '%"+param.age+"%'";
            }
            if (param.name != '' && param.age != '') {
                list = list + " where name like '%"+param.name+"%' and age like '%"+param.age+"%'";
            }
            // 开始连接数据库；
            connect.query(list, [], (err, result) =>{
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
    del: (req, res, next) => {
        pool.getConnection((err, connect) => {
            // 获取前台页面传过来的参数
            let param = req.query || req.params;
            let del = sql.del + param.id;
            console.log(del);
            // 建立连接，查询表中数据；
            connect.query(del, [], (err, result) =>{
                if (err) {
                    console.log(err);
                    return;
                }
                let obj = {};
                if (result) {
                    obj = {
                        result: result,
                        code: '02',
                        msg: '请求成功！'
                    }
                }
                jsonWrite(res, obj);
                // 释放连接
                connect.release();
            })
        });
    },
    add: (req, res, next) => {
        pool.getConnection((err, connect) => {
            // 获取前台页面传过来的参数
            let param = req.query || req.body;
            console.log('query', req.query);
            console.log('body', req.body);
            console.log(param);
            let add = sql.add + '('+ param.name +','+ param.sex +','+ param.age +','+ param.tel +')';
            console.log(add);
            // 建立连接，查询表中数据；
            connect.query(sqldel, [], (err, result) =>{
                if (err) {
                    console.log(err);
                    return;
                }
                let obj = {};
                if (result) {
                    obj = {
                        result: result,
                        code: '01',
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
