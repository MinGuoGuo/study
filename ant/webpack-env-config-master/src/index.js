import React from 'react'
import ReactDOM from 'react-dom'

require('./sass/index.scss')

class AppContainer extends React.Component {
    render() {
        return (
            <h1>
                hello react, this is a test for configging the webpack.
            </h1>
        )
    }
}

let app = document.getElementById('app')

ReactDOM.render(<AppContainer />, app)