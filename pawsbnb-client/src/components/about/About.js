import React, {Component} from 'react'
import './css/about.css';
import Logo from '../../logo/pawsbnb-logo.png'

export default class About extends Component {
    render() {
        return (
            <div className="wrapper">
                <img src={Logo} alt="logo" className="logo"/>
                <div className="about-container">
                    <h1 className="center">About</h1>
                    <div className="info">
                        <h2>Purpose</h2>
                        <ul>
                            <li>PawsBnB was originally created as an educational project for Flatiron School.</li>
                            <li>The goal was to create an application for small at-home pet sitting businesses.</li>
                            <li>I wanted the application to be lighter weight than some of the other pet boarding apps out there.</li>
                        </ul>
                        <h2>How to Create An Account</h2>
                        <ul>
                            <li>Accounts can be created via the <a href="/signup">sign up page</a>.</li>
                            <li>Accounts can be logged in to via the <a href="/login">login page</a>.</li>
                        </ul>
                        <h2>Getting Started</h2>
                        <ul>
                            <li>The main featute is adding appointments to your calendar.</li>
                            <li>You cannot add an appointment without assigning that appointment to a client as well.</li>
                            <li>Add a client via the <a href="/clients">clients page</a> when you are signed into your account.</li>
                            <li>You can create new appointments with a valid client via the menu in the <a href="/dashboard">dashboard</a> (hamburger icon).</li>
                        </ul>
                        <h2>Editting Appointments</h2>
                        <ul>
                            <li>To edit an appointment, click on the appointment in the calendar.</li>
                            <li>This will open a form where you can view and update the appointment.</li>
                            <li>To delete the appointment, click the trash icon at the bottom of the form.</li>
                            <li>To make a quick change to the start date, you can just drag the appointment to the desired date.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}