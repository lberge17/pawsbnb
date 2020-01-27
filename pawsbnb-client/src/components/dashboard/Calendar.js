import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import AppointmentForm from '../appointments/AppointmentForm'

export default class Calendar extends React.Component {
    state = {
        viewAppointment: false,
        appointment: null
    }

    handleDateClick = (arg) => {
        console.log(arg.dateStr)
    }

    handleEventDrop = (info) => {
        console.log(info)

        if(window.confirm("Are you sure you want to change the event date?")){
            console.log('change confirmed')
            this.props.updateAppointment({...info.event.extendedProps, start: info.event.start, end: info.event.end})
        } else {
            console.log('change denied')
            window.location.reload()
        }
    }

    handleEventClick= ({event}) => {
        console.log(event.extendedProps)
        this.setState({
            viewAppointment: true,
            appointment: event.extendedProps
        })
    }

    formatEvents = () => {
        
        return this.props.appointments.map(appointment => {
            const {title, end, start} = appointment

            let startTime = new Date(start)
            let endTime = new Date(end)

            return {title, start: startTime, end: endTime, extendedProps: {...appointment}}
        })
    }

    render() {
        console.log(this.formatEvents())
        return (
            <div>
                    {this.state.viewAppointment ? 
                        <div className="appointment-container popup">
                            {/* <h3>Title: {this.state.appointment.title}</h3>
                            <p>Start: {this.state.appointment.start}</p>
                            <p>End: {this.state.appointment.end}</p>
                            <p>Pets: {this.state.appointment.pets}</p>
                            <p>Services: {this.state.appointment.services}</p>
                            <p>Medications: {this.state.appointment.medications}</p>
                            <p>Details: {this.state.appointment.details}</p>
                            <button>Edit</button> */}
                            <AppointmentForm appointment={this.state.appointment}/>
                        </div> : 
                    null}
                <FullCalendar 
                    defaultView="dayGridMonth" 
                    plugins={[dayGridPlugin, interactionPlugin]}
                    dateClick={this.handleDateClick}
                    editable={true}
                    eventDrop={this.handleEventDrop}
                    eventClick={this.handleEventClick}
                    events={this.formatEvents()}
                />
            </div>
      )
    }
  
}