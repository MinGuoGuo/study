const hello = require('./hello');
console.log(new hello());

let obj = new hello();

obj.setName('lbj');
obj.sayHello();
