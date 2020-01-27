import React, { Component } from 'react'
import BusinessForm from '../business/BusinessForm'
import Calendar from './Calendar'
import './css/dashboard.css'
import { connect } from 'react-redux';
import { fetchAppointments, updateAppointment } from '../../actions/appointmentsActions'

class Dashboard extends Component {
    state = {
        form: false,
        toggleHam: false,
        viewAppointment: false,
        appointment: null,
        newAppointment: false
    }

    openAppointment = (appointment) => {
        this.setState({
            viewAppointment: true,
            appointment: appointment,
            newAppointment: false
        })
    }

    closeAppointment = () => {
        this.setState({
            viewAppointment: false,
            appointment: null,
            newAppointment: false
        })
    }

    openNewAppointment = () => {
        this.setState({
            viewAppointment: false,
            appointment: null,
            newAppointment: true
        })
    }

    closeNewAppointment = () => {
        this.setState({
            viewAppointment: false,
            appointment: null,
            newAppointment: false
        })
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

    componentDidMount() {
        this.props.fetchAppointments()
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
                        <hr/>
                        <a href="#" onClick={this.handleFormLoad}>Add/Update Business</a>
                        <hr/>
                        <a href="/clients">Clients</a>
                        <hr/>
                        <a onClick={this.openNewAppointment}>Add Appointments</a>
                        <hr/>
                    </div>
                </div>

                <h1>{this.props.business.title ? this.props.business.title : 'Please click the menu icon to add your Business'}</h1>
                {this.state.form ? 
                    <BusinessForm user={this.props.user} business={this.props.business} location={this.props.location}/> : null
                }
                <div className="calendar-container">
                    <h1>Your Calendar</h1>
                    <Calendar 
                        appointments={this.props.appointments} 
                        updateAppointment={this.props.updateAppointment} 
                        viewAppointment={this.state.viewAppointment}
                        newAppointment={this.state.newAppointment}
                        openAppointment={this.openAppointment} 
                        closeAppointment={this.closeAppointment} 
                        openNewAppointment={this.openNewAppointment} 
                        closeNewAppointment={this.closeNewAppointment}
                        appointment={this.state.appointment}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (state)

const mapDispatchToProps = (dispatch) => ({
    fetchAppointments: () => {dispatch(fetchAppointments())},
    updateAppointment: (appointment) => {dispatch(updateAppointment(appointment))} 
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);