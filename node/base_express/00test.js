const express = require('express');

const app = express();

app.get('/', (req, res) => {
    //res.send('test.js');
    //res.json('hello Express');
    res.end('hello end!');
});

app.use(express.static(__dirname + '/public'));
app.listen(3000, () => {
    console.log('监听成功');
});
