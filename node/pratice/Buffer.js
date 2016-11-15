/*
* JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
*一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
* */

const buf = new Buffer(10);
console.log(typeof buf);
console.log(buf.length);

const buf2 = new Buffer([10, 20, 30]);
console.log(buf2);

const buf3 = new Buffer('www.runoob.com', 'utf-8');
