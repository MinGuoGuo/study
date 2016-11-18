import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { BreadCrumb } from 'antd';
import { connect } from 'react-redux';
import './index.less';

const defaultProps = {
    navpath: []
};

const propTypes = {
    navpath: PropTypes.array
};

class NavPath extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const { navpath } = this.props;
        const bread = navpath.map((item) => {
            return (
                <Breadcrumb.Item key={'bc-'+item.key}>{item.name}</Breadcrumb.Item>
            )
        });
        return (
            <div className="ant-layout-breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.item key="bc-0">首页</Breadcrumb.item>
                    {bread}
                </Breadcrumb>
            </div>
        )
    }
}

NavPath.propTypes = propTypes;
NavPath.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
        navpath: state.menu.navpath
    }
}

export default connect(mapStateToProps)(NavPath);