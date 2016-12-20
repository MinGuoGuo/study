import React from 'react';
import ReactDOM from 'react-dom';
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()} </h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
//
// setInterval(tick, 1000);
// function Hello(props) {
//     console.log('this', this);
//     return <h1>hello {props.name}!</h1>
// }
// class Hello extends React.Component {
//     constructor (props) {
//         super (props);
//     }
//     render () {
//         return (
//             <h1>hello {this.props.name}</h1>
//         )
//     }
// }

/*class Hello extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            date: new Date(),
            no: 0
        }
    }
    componentWillMount () {

    }
    componentDidMount () {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000)
    }
    componentWillUnmount () {
        console.log(this.timer);
    }
    handClick () {
        this.setState((prevState, props) => ({
            no: prevState.no + props.num
        }));
        // clearInterval(this.timer);
    }
    render () {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()} </h2>
                <h2>current num is {this.state.no}</h2>
                <button onClick={this.handClick.bind(this)}>click</button>
            </div>

        )
    }
}*/
/*function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}*/
/*class Hello extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            status: 'login',
            in: 'block',
            out: 'none'
        }
    }
    handClick () {
        this.setState({
            status: 'logout',
            in: 'none',
            out: 'block'
        });
    }
    handleClick () {
        this.setState({
            status: 'login',
            in: 'block',
            out: 'none'
        })
    }
    render () {
        return (
            <div>
                <button style={{display: this.state.in}} onClick={this.handClick.bind(this)}>{this.state.status}</button>
                <button style={{display: this.state.out}} onClick={this.handleClick.bind(this)}>{this.state.status}</button>
            </div>
        )
    }
}*/

// class Hello extends React.Component {
//     constructor (props) {
//         super (props);
//         this.state = {
//             light: true
//         }
//     }
//     handInClick () {
//         this.setState({
//             light: false
//         });
//     }
//     handOutClick () {
//         this.setState({
//             light: true
//         });
//     }
//     render () {
//         let button = null;
//         let light = this.state.light;
//         if (light) {
//             button = <button onClick={this.handInClick.bind(this)}>login</button>
//         } else {
//             button = <button onClick={this.handOutClick.bind(this)}>logout</button>
//         }
//         return (
//             <div>
//                 {button}
//             </div>
//         )
//     }
// }

const messages = ['React', 'Re: React', 'Re:Re: React'];
/*class Hello extends React.Component {
    render () {
        return (
            <div>
                {
                    console.log(this.props.messages.length)
                }
            </div>
        )
    }
}*/
const arr = [1, 3, 5, 6];
/*class Hello extends React.Component {
    render () {
        console.log(this.props.arr);
        return(
            <div>
                <ul>
                    {
                        arr.map((index) => {
                            return (
                                <li key={index.toString()}>{index}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )

    }
}*/

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.input.value);
    alert('A name was submitted: ' + this.refs.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          {/* <input type="text" ref={(input) => this.input = input} /> */}
          <input type="text" ref="input" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<Hello name="js" arr={arr} messages={messages} num={4} />, document.getElementById('root'));
