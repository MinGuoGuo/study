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
    // 列表页
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
    // 删除页
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
    // 新增页
    add: (req, res, next) => {
        pool.getConnection((err, connect) => {
            // 获取前台页面传过来的参数
            let param = req.query == {} || req.body;
            let add = sql.add + '(\''+ param.name +'\',\''+ param.sex +'\','+ param.age +','+ param.tel +')';
            console.log(add);
            // 建立连接，查询表中数据；
            connect.query(add, [], (err, result) =>{
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
    // 修改页面；
    update: (req, res, next) => {
        // 连接数据库；
        pool.getConnection((err, connect) => {
            // 获取前端传过来的值；
            let param = req.query == {} || req.body;
            // 拼接sql语句；
            let update = sql.update + ' name=\''+param.name + '\', age='+param.age+', sex=\''+param.sex+'\', tel='+param.tel+' where id='+param.id;
            console.log('update', update);
            // 执行sql语句；
            connect.query(update, [], (err, result) => {
                if (err) {
                    throw err;
                    return;
                }
                let obj = {};
                if (result) {
                    obj = {
                        result: result,
                        code: '01',
                        msg: '请求成功'
                    }
                }
                // 重写接口；
                jsonWrite(res, obj);
                // 释放连接
                connect.release();
            });

        });
    },
    detail: (req, res, next) => {
        pool.getConnection((err, connect) => {
            let param = req.query == {} ||req.body;
            // 拼接sql语句；
            let detail = sql.list + ' where id=' + param.id;
            console.log('detail', detail);
            // 开始连接
            connect.query(detail, [], (err, result) => {
                if (err) {
                    throw err;
                    return;
                }
                let obj = {};
                if (result) {
                    obj = {
                        result: result,
                        code: '01',
                        msg: '请求成功'
                    }
                }
                // 重写接口
                jsonWrite(res, obj);
                // 释放连接
                connect.release();
            });
        });
    }
}
