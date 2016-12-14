const express = require('express');
const app = express();
const path = require('path')

// 设定port变量，意为访问端口
app.set('port', process.env.PORT || 3000);

// 设定views变量，意为视图存放的目录
app.set('views', path.join(__dirname, 'views'));

// 设定view engine变量，意为网页模板引擎；
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

// 设定静态文件目录，比如bending文件；
app.use(express.static(path.join(__dirname, 'public')));

// 指定根路由
app.get('/', (req, res) => {
    res.send('hello express!')
})

app.listen(app.get('port'));
