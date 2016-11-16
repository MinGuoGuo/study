const fs = require('fs');

//异步读取
/*fs.readFile('test.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log('异步读取：' + data.toString());
});
console.log('异步执行完毕');*/

//同步读取;
/*
const oData = fs.readFileSync('test.txt');
console.log('同步读取：' + oData.toString());
console.log('同步执行完毕');*/

//如何打开文件
/*console.log('准备打开文件');
fs.open('test.txt', 'r+', (err, fd) => {
    if (err) {
        return console.error(err);
    }
    console.log('文件打开成功');
});*/

//写入文件
console.log('准备写入文件');
fs.writeFile('input.txt', '我是通过写入的内容，哈哈哈', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('数据写入成功！');
    console.log('-------我是分割线--------');
    console.log('开始读取写入数据');
    fs.readFile('input.txt', (err, data) => {
        if (err) {
            return console.error(err);
        }
        console.log('异步读取文件数据: ' + data.toString());
    });
});






