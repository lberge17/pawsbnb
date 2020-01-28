import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './components/home/Home'
import Dashboard from './components/dashboard/Dashboard'
import About from './components/about/About'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Businesses from './components/business/Businesses'
import { connect } from 'react-redux';
// import { addBusiness, removeBusiness } from './actions/businessActions'
import { fetchLogin, fetchLogout, fetchLoginStatus } from './actions/sessionActions'
import { fetchSignin } from './actions/registrationActions'
import Clients from './components/clients/Clients'
import {LogoutButton} from './components/auth/LogoutButton'

class App extends Component {
  handleLogout = (history) => {
    this.props.fetchLogout()
  }

  renderRedirectDashboard = () => {
    if (this.props.auth.loggedIn) {
      return <Redirect to='/dashboard' />
    }
  }

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
              <Home 
                { ...props }
                loggedIn={this.props.auth.loggedIn}
              />
            )}
          />
          <Route
            exact path='/login'
            render={props => (
              <Login 
                { ...props } 
                renderRedirectDashboard={this.renderRedirectDashboard} 
                fetchLogin={this.props.fetchLogin} 
              />
            )}
          />
          <Route
            exact path='/signup'
            render={props => (
              <Signup 
                { ...props } 
                renderRedirectDashboard={this.renderRedirectDashboard} 
                fetchSignin={this.props.fetchSignin}
              />
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
              <Dashboard 
                { ...props } 
              /> 
            )}
          />
          <Route
            exact path='/businesses'
            component={Businesses}
          />
          <Route
            exact path='/clients'
            render={props => (
              <Clients 
                {...props} 
              />
            )}
            
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
  fetchSignin: (user) => dispatch(fetchSignin(user)),
  fetchLogin: (user) => dispatch(fetchLogin(user)),
  fetchLogout: () => dispatch(fetchLogout()),
  fetchLoginStatus: () => dispatch(fetchLoginStatus())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)