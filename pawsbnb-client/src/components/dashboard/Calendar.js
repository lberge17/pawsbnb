import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import AppointmentForm from '../appointments/AppointmentForm'

export default class Calendar extends React.Component {
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
        this.props.openAppointment(event.extendedProps)
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
        // console.log(this.formatEvents())
        return (
            <div>
                    {this.props.viewAppointment ? 
                        <div className="appointment-container popup">
                            <div className="right">
                                <a className="pointer-cursor close-btn" onClick={this.props.closeAppointment}>&times;</a>
                            </div>
                            <AppointmentForm appointment={this.props.appointment} closeAppointment={this.props.closeAppointment} closeNewAppointment={this.props.closeNewAppointment}/>
                        </div> : 
                    null}
                    {this.props.newAppointment ? 
                        <div className="appointment-container popup">
                            <div className="right">
                                <a className="pointer-cursor close-btn" onClick={this.props.closeNewAppointment}>&times;</a>
                            </div>
                            <AppointmentForm appointment={{}} closeNewAppointment={this.props.closeNewAppointment}/>
                        </div> : 
                    null}
                <FullCalendar 
                    defaultView="dayGridMonth" 
                    plugins={[dayGridPlugin, interactionPlugin]}
                    editable={true}
                    eventDrop={this.handleEventDrop}
                    eventClick={this.handleEventClick}
                    events={this.formatEvents()}
                />
            </div>
      )
    }
  
}