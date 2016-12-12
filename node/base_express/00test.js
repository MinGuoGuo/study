const express = require('express');

const app = express();

app.get('/', (req, res) => {
    //res.send('test.js');
    //res.json('hello Express');
    res.end('hello end!');
});
app.listen(3000, () => {
    console.log('监听成功');
});
