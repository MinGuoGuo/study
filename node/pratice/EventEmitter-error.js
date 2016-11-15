/*是以下代码演示的当我们遇到异常时触发的error事件*/
const events = require('events').EventEmitter;
const emitter = new events();

emitter.emit('error');