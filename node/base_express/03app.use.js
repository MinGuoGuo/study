/*这是一个测试express静态文件的
  可以用这个来配置的项目的入口文件
  use主要还是express注册中间件的方法
  中间件：处理http请求的函数，个人认为就是回调函数
*/
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(9001, () => {
    console.log('监听端口9001成功');
});
