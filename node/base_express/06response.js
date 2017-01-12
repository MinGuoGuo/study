const app = require('express')();

app.get('/', (req, res) => {
    res.render('index', {
        message: 'hello response!'
    })
});

app.listen(9001, () => {
    console.log('监听成功9001')
});
