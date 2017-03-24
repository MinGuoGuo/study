import React, { Component } from 'react';
import { Row,  Col } from 'antd';


export default class Header extends Component {
    render() {
        return (
            <div className="header" style={{height: '80px', backgroundColor: '#0452a7'}}>
                <Row>
                    <Col xs={20} sm={16} md={12} lg={8}>
                        <p className="logo" style={{color: '#fff', fontSize: '20px', marginLeft: '20px', lineHeight: '80px'}}>学生管理系统</p>
                    </Col>
                </Row>
            </div>
        )
    }
}
