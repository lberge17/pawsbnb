import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './components/home/Home'
import Dashboard from './components/dashboard/Dashboard'
import About from './components/about/About'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Businesses from './components/business/Businesses'
import axios from 'axios'
import { connect } from 'react-redux';
// import { addBusiness, removeBusiness } from './actions/businessActions'
import { fetchLogin, fetchLogout, fetchLoginStatus } from './actions/sessionActions'
import Clients from './components/clients/Clients'
import {LogoutButton} from './components/auth/LogoutButton'

class App extends Component {
  handleSuccessfulAuth = (data, history) => {
    // this.handleLogin(data);
    history.push('/dashboard')
  }

  // handleLogin = (data) => {
  //   this.props.addBusiness(data.business)
  //   this.props.addUser(data.user)
  //   this.props.login()
  // }

  handleLogout = (history) => {
    this.props.fetchLogout()
    history.push('/')
    // axios.delete("http://localhost:3000/logout", { withCredentials: true })
    //   .then(resp => {
    //     if(resp.data.logged_out) {
    //       this.props.removeUser()
    //       this.props.removeBusiness()
    //       this.props.logout()
    //       history.push('/')
    //     }
    //   })
    //   .catch(error => console.log(error))
  }

  // checkLoginStatus = () => {
  //   axios.get("http://localhost:3000/logged_in", { withCredentials: true })
  //     .then(resp => {
  //       console.log(resp)
  //       if (resp.data.logged_in) {
  //         this.props.addUser(resp.data.user)
  //         this.props.addBusiness(resp.data.business)
  //         this.props.login()
  //       } else {
  //         this.props.removeBusiness()
  //         this.props.removeUser()
  //         this.props.logout()
  //       }
  //     })
  //     .catch(error => console.log(error))
  // }

  componentDidMount() {
    this.props.fetchLoginStatus()
  }

  render () {
    return (
      <div className="App">
        <Router>
          <Route 
            exact path='/'
            render={props => (
              <Home { ...props } />
            )}
          />
          <Route
            exact path='/login'
            render={props => (
              <Login { ...props } fetchLogin={this.props.fetchLogin} handleSuccessfulAuth={this.handleSuccessfulAuth} />
            )}
          />
          <Route
            exact path='/signup'
            render={props => (
              <Signup { ...props } handleSuccessfulAuth={this.handleSuccessfulAuth} />
            )}
          />
          <Route
            exact path='/about'
            render={props => (
              <About { ...props } />
            )}
          />
          <Route
            exact path='/dashboard'
            render={props => (
              <Dashboard { ...props } /> 
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
            path='/'
            render={props => (
              (this.props.auth.loggedIn) ? 
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
  // addBusiness: (business) => dispatch(addBusiness(business)),
  // removeBusiness: () => dispatch(removeBusiness()),
  fetchLogin: (user) => dispatch(fetchLogin(user)),
  fetchLogout: () => dispatch(fetchLogout()),
  fetchLoginStatus: () => dispatch(fetchLoginStatus())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)