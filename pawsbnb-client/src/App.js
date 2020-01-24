import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home'
import Dashboard from './components/home/Dashboard'
import About from './components/about/About'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import axios from 'axios'

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

  handleLogout = () => {
    axios.delete("http://localhost:3000/logout", { withCredentials: true })
      .then(resp => {
        if(resp.data.logged_out) {
          this.setState({
            loggedIn: false
          })
        }
      })
      .catch(error => console.log(error))
  }

  checkLoginStatus = () => {
    axios.get("http://localhost:3000/logged_in", { withCredentials: true })
      .then(resp => {
        console.log(resp)
        if (resp.data.logged_in) {
          this.setState({
            loggedIn: resp.data.logged_in,
            user: resp.data.user
          })
        } else {
          this.setState({
            loggedIn: false,
            user: {}
          })
        }
      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.checkLoginStatus()
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
          <Route
            exact path='/dashboard'
            render={props => (
              <Dashboard { ...props } loggedIn={this.state.loggedIn} />
            )}
          />
        </Router>
        {this.state.loggedIn ? <button onClick={this.handleLogout} className="logout">Logout</button> : null}
      </div>
    );
  }
}
