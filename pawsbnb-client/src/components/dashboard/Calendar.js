import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
// import AppointmentForm from '../appointments/AppointmentForm'

export default class Calendar extends React.Component {
    state = {
        viewAppointment: false,
        appointment: null
    }

    handleDateClick = (arg) => {
        console.log(arg.dateStr)
    }

    handleEventDrop = (info) => {
        console.log(info.event.start)
        let start = toString(info.event.start).split(' ').slice(1,4)
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const ind = months.findIndex(month => month === start[0])
        // start[0] = ind + 1
        console.log(info.event.start.toISOString())
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
                            <h3>Title: {this.state.appointment.title}</h3>
                            <p>Start: {this.state.appointment.start}</p>
                            <p>End: {this.state.appointment.end}</p>
                            <p>Pets: {this.state.appointment.pets}</p>
                            <p>Services: {this.state.appointment.services}</p>
                            <p>Medications: {this.state.appointment.medications}</p>
                            <p>Details: {this.state.appointment.details}</p>
                            <button>Edit</button>
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