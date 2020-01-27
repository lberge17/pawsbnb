import React, { Component } from 'react'
import AppointmentForm from './AppointmentForm'

export default class Appointments extends Component {
    render() {
        return (
            <div>
                <h1>Appointments</h1>
                <AppointmentForm/>
            </div>
        )
    }
}