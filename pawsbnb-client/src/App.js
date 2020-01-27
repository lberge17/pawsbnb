import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home'
import Dashboard from './components/dashboard/Dashboard'
import About from './components/about/About'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Businesses from './components/business/Businesses'
import axios from 'axios'
import { connect } from 'react-redux';
import { addBusiness, removeBusiness } from './actions/businessActions'
import { addUser, removeUser, login, logout } from './actions/userActions'
import Clients from './components/clients/Clients'
import Appointments from './components/appointments/Appointments'
import {LogoutButton} from './components/auth/LogoutButton'

class App extends Component {
  handleSuccessfulAuth = (data, history) => {
    this.handleLogin(data);
    history.push('/dashboard')
  }

  handleLogin = (data) => {
    this.props.addBusiness(data.business)
    this.props.addUser(data.user)
    this.props.login()
  }

  handleLogout = (history) => {
    axios.delete("http://localhost:3000/logout", { withCredentials: true })
      .then(resp => {
        if(resp.data.logged_out) {
          this.props.removeUser()
          this.props.removeBusiness()
          this.props.logout()
          history.push('/')
        }
      })
      .catch(error => console.log(error))
  }

  checkLoginStatus = () => {
    axios.get("http://localhost:3000/logged_in", { withCredentials: true })
      .then(resp => {
        console.log(resp)
        if (resp.data.logged_in) {
          this.props.addUser(resp.data.user)
          this.props.addBusiness(resp.data.business)
          this.props.login()
        } else {
          this.props.removeBusiness()
          this.props.removeUser()
          this.props.logout()
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
              <Home { ...props } loggedIn={this.props.loggedIn} />
            )}
          />
          <Route
            exact path='/login'
            render={props => (
              <Login { ...props } loggedIn={this.props.loggedIn} handleSuccessfulAuth={this.handleSuccessfulAuth} />
            )}
          />
          <Route
            exact path='/signup'
            render={props => (
              <Signup { ...props } loggedIn={this.props.loggedIn} handleSuccessfulAuth={this.handleSuccessfulAuth} />
            )}
          />
          <Route
            exact path='/about'
            render={props => (
              <About { ...props } loggedIn={this.props.loggedIn} />
            )}
          />
          <Route
            exact path='/dashboard'
            render={props => (
              <Dashboard { ...props } loggedIn={this.props.loggedIn} />
            )}
          />
          <Route
            exact path='/businesses'
            component={Businesses}
          />
          <Route
            exact path='/clients'
            component={Clients}
          />
          <Route
            exact path='/appointments'
            component={Appointments}
          />
          <Route
            path='/'
            render={props => (
              (this.props.loggedIn) ? 
              <LogoutButton {...props} handleLogout={this.handleLogout}/> : null
            )}
          />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  addBusiness: (business) => dispatch(addBusiness(business)),
  removeBusiness: () => dispatch(removeBusiness()),
  addUser: (user) => dispatch(addUser(user)),
  removeUser: () => dispatch(removeUser()),
  login: () => dispatch(login()),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)