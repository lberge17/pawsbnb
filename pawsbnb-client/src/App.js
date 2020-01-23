import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home'
import About from './components/about/About'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      user: {}
    }
  }

  handleSuccessfulAuth = (data, history) => {
    this.handleLogin(data);
    history.push('/about')
  }

  handleLogin = (data) => {
    this.setState({
      loggedIn: true,
      user: data.user
    })
  }

  render () {
    return (
      <div className="App">
        <Router>
          <Route 
            exact path='/'
            render={props => (
              <Home { ...props } loggedIn={this.state.loggedIn} />
            )}
          />
          <Route
            exact path='/login'
            render={props => (
              <Login { ...props } loggedIn={this.state.loggedIn} handleSuccessfulAuth={this.handleSuccessfulAuth} />
            )}
          />
          <Route
            exact path='/signup'
            render={props => (
              <Signup { ...props } loggedIn={this.state.loggedIn} handleSuccessfulAuth={this.handleSuccessfulAuth} />
            )}
          />
          <Route
            exact path='/about'
            render={props => (
              <About { ...props } loggedIn={this.state.loggedIn} />
            )}
          />
        </Router>
      </div>
    );
  }
}
