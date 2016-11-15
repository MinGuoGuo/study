/*
* 通过es6的方法来构建一个类，下面使用es5的方法来创建一个类；
* */
class Hello {
    constructor (name) {
        this.name = name;
    }
    setName(thyName) {
        this.name = thyName;
    }
    sayHello() {
        console.log('Hello' + this.name);
    }
}

/*function Hello () {
    var name;
    this.setName = (thyName) => {
        name = thyName;
    };
    this.sayHello = () => {
        console.log('Hello' + name);
    }
}*/

 /*
 * 将此作为函数一个完整的module暴露出去
 * */
module.exports = Hello;
