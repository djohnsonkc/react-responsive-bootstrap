import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Account from './components/Account';
import Login from './components/Login';
import Logout from './components/Logout';
import './App.css';


//**********************************************************
// use these functions to be able to pass props to routes
//**********************************************************
const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}


//**********************************************************
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      isLoggedIn: false,
      auth: {
        access_token: null,
        expires_in: null
      }
    };

    // set these up so that Login.js can pass things back up
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleAuth = this.handleAuth.bind(this);

  }

  //******************************************************************
  // handlers that are passed into Login.js
  //******************************************************************
  handleEmail = (evt) => {
    console.log("email change: " + evt.target.value)
    this.setState({ email: evt.target.value });
  }

  handlePassword = (evt) => {
    console.log("password change: " + evt.target.value)
    this.setState({ password: evt.target.value });
  }

  handleAuth(results) {
    this.setState({
      email: results.email,
      first_name: results.first_name,
      isLoggedIn: results.isLoggedIn,
      auth: results.auth
    });
  }


  render() {
    return (


      <Router>
        <div className="container">
          <NavBar user={this.state} />

          <div>
            <Route exact path="/" component={Home} />
            <Route path="/account" render={()=>
              <Account user={this.state} />}
            />
            <Route exact path="/logout" component={Logout} />
            <PropsRoute path="/login" 
              component={Login} 
              user={this.state} 
              onEmailChange={this.handleEmail} 
              onPasswordChange={this.handlePassword} 
              onAuthChange={this.handleAuth} />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;