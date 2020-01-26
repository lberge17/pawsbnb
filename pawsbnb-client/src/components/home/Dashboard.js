import React, { Component } from 'react'
import BusinessForm from '../business/BusinessForm'
import Calendar from './Calendar'
import './css/dashboard.css'

export default class Dashboard extends Component {
    state = {
        form: false,
        toggleHam: false
    }

    handleFormLoad = () => {
        console.log('handling form load')
        this.setState({
            form: true
        })
    }

    toggle = () => {
        this.setState(prevState => {
            return {toggleHam: !prevState.toggleHam}
        })
    }

    render() {
        if (!this.props.loggedIn) {
            this.props.history.push('/')
        }

        console.log(this.props.user)

        return (
            <div>
                <button className="hamIcon" onClick={this.toggle}><h1>&#9776;</h1></button>
                <div className="side-container">
                    <div id="mySidebar" className={this.state.toggleHam ? "sidebar toggle" : "sidebar"}>
                        <a href="#" className="close" onClick={this.toggle}>&times;</a>
                        <a href="#" onClick={this.handleFormLoad}>Add/Update Business</a>
                        <a href="#">Clients</a>
                        <a href="#">Add Appointments</a>
                    </div>
                </div>

                <h1>{this.props.business.title ? this.props.business.title : 'Please click the menu icon to add your Business'}</h1>
                {this.state.form ? 
                    <BusinessForm user={this.props.user} business={this.props.business} location={this.props.location}/> : null
                }
                <div className="calendar-container">
                    <h1>Your Calendar</h1>
                    <Calendar/>
                </div>
            </div>
        )
    }
}