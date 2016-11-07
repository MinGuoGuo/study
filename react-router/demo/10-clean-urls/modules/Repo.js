import React, { Component } from 'react';

export default class Repo extends Component {
    render () {
        return <h2>{this.props.params.repoName}</h2>
    }
}