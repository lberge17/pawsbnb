import React, { Component } from 'react'
import BusinessForm from '../business/BusinessForm'
import Calendar from './Calendar'
import './css/dashboard.css'
import { connect } from 'react-redux';
import { updateAppointment } from '../../actions/appointmentsActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

    render() {
        return (
            <div>
                {this.props.renderRedirectHome()}
                <div className="hamIcon pointer-cursor" onClick={this.toggle}><FontAwesomeIcon icon={faBars}/></div>
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

                <h1>Dashboard</h1>
                <div>{this.props.auth.business.title ? 
                    <div>
                        <h3>Welcome back {this.props.auth.user.name}!</h3>
                        <p>Your Business: {this.props.auth.business.title}</p>
                        <p>Description: {this.props.auth.business.description}</p>
                        <p>Location: {this.props.auth.business.location}</p>
                    </div> : 
                    'Please Add Your Business'}
                </div>
                {this.state.form ? 
                    <BusinessForm user={this.props.auth.user} business={this.props.auth.business} location={this.props.location}/> : null
                }
                <p>*Click the icon on the left to open the menu*</p>
                <div className="calendar-container">
                    <h1>Your Calendar</h1>
                    <Calendar 
                        appointments={this.props.auth.appointments} 
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
    // fetchAppointments: () => {dispatch(fetchAppointments())},
    updateAppointment: (appointment) => {dispatch(updateAppointment(appointment))} 
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);