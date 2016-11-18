import React, { Component } from 'react';
import './footer.less';

export default class Footer extends  Component {
    //因为这里没有action所以不调用构造函数
    render () {
        return (
            <div className="footer">
                xxx  版权所有 @ 2015 xxxxx.com
            </div>
        )
    }
}