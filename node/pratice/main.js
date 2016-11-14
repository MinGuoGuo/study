/*const fs = require('fs');
const data = fs.readFileSync('test.txt');
console.log(data.toString());
console.log('程序执行结束');*/
//以上代码是顺序执行；没用体现出node的异步编程思想;简称阻塞

const fs = require('fs');
fs.readFile('test.txt', (err, data) => {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log('程序执行结束');
/*以上代码体现了node的异步执行结果,简称非代码阻塞*/

