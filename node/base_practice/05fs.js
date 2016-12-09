const fs = require('fs');

fs.readFile('test.txt', (err, data) => {
    if (err) {
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});

console.log('程序执行完毕！');
